let events2 = [
	{
		label: 'Lucía Severino',
		img: 'images/lucia-severino.jpg',
		href: 'events/lucia-severino',
		date: '12 de Octubre',
		time: '20:00 Hs',
		price: '$600',
		description: 'Presenta su nuevo disco Presente Continuo.'
	},
	{
		label: 'Jaime Clara',
		img: 'images/jaime-clara.jpg',
		href: 'events/jaime-clara',
		date: '3 de Noviembre',
		time: '16:00 Hs',
		price: 'Entrada Libre',
		description: 'Presentando el libro "En la Larga Noche".'
	},
	{
		label: 'Estatuas vivientes',
		img: 'images/estatuas.jpg',
		href: 'events/estatuas-vivientes',
		date: '3 de Noviembre',
		time: '16:00 Hs',
		price: 'Entrada Libre',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	}
];

let activities = [
	{
		id: 1,
		label: 'Teatro',
		img: 'images/teatro.jpg',
		href: '/actividades/teatro',
		day: 'Miércoles',
		time: '20:00 Hs',
		price: '$600',
		description: 'Teatro para niveles Intermedio y Avanzados. Talleres dictados por Carmen Morán.'
	},
	{
		id: 2,
		label: 'Yoga integral',
		img: 'images/yoga.jpg',
		href: '/actividades/yoga',
		day: 'Miércoles y Viernes',
		time: '9:45 Hs',
		price: '$600',
		description:
			'Para conectarnos con nuestro cuerpo, relajarnos, armonizar y trabajar la flexibilidad y el movimiento con esta disciplina milenaria. A cargo de Luciana Astengo.'
	},
	{
		id: 3,
		label: 'Karate do Shokotan',
		img: 'images/karate.avif',
		href: '/actividades/karate',
		day: 'Martes y Jueves',
		time: '20:00 Hs',
		price: '$600',
		description:
			'Entrenamiento físico, autodefensa y crecimiento personal. A cargo de Stevens Prous.'
	}
];

export async function load() {
	const response = await fetch(
		'https://strapi-production-72b9.up.railway.app/api/eventos?populate=*',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	const json = await response.json();

	const events = json.data.map((event: any) => {
		const date = new Date(event.attributes.Fecha)
			.toLocaleDateString('es-uy', {
				weekday: 'long',
				month: 'long',
				day: 'numeric'
			})
			.replace(',', '');

		return {
			id: event.id,
			label: event.attributes.Titulo,
			img: event.attributes.Imagen.data?.attributes.url || '',
			href: `events/${event.id}`,
			date,
			time: event.attributes.Horario.slice(0, 5),
			price: +event.attributes.Precio,
			description: event.attributes.Descripcion
		};
	});

	return {
		events,
		activities
	};
}
