let activities = [
	{
		id: 1,
		label: 'Teatro',
		img: '/images/teatro.jpg',
		href: '/actividades/teatro',
		day: 'Miércoles',
		time: '20:00 Hs',
		price: '$600',
		description: 'Teatro para niveles Intermedio y Avanzados. Talleres dictados por Carmen Morán.'
	},
	{
		id: 2,
		label: 'Yoga integral',
		img: '/images/yoga.jpg',
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
		img: '/images/karate.avif',
		href: '/actividades/karate',
		day: 'Martes y Jueves',
		time: '20:00 Hs',
		price: '$600',
		description:
			'Entrenamiento físico, autodefensa y crecimiento personal. A cargo de Stevens Prous.'
	}
];

const colors = ['#818cf8', '#34d399', '#fde047', '#f87171'];

export async function load() {
	const response = await fetch(
		'https://strapi-production-c8d7.up.railway.app/api/eventos?populate=*',
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

		const color = colors[event.id % colors.length];
		return {
			id: event.id,
			label: event.attributes.Titulo,
			img: event.attributes.Imagen.data?.attributes.url || '',
			href: `eventos/${event.id}`,
			date,
			time: event.attributes.Horario.slice(0, 5),
			price: +event.attributes.Precio,
			description: event.attributes.Descripcion,
			color
		};
	});

	const response2 = await fetch(
		'https://strapi-production-c8d7.up.railway.app/api/actividades?populate=*',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	const json2 = await response2.json();
	console.log(json2);

	if (json2.data) {
		const activities = json2.data.map((activity: any) => {
			const date = new Date(activity.attributes.Fecha)
				.toLocaleDateString('es-uy', {
					weekday: 'long',
					month: 'long',
					day: 'numeric'
				})
				.replace(',', '');

			return {
				id: activity.id,
				label: activity.attributes.Titulo,
				img: activity.attributes.Imagen.data?.attributes.url || '',
				href: `actividades/${activity.id}`,
				day: activity.attributes.Dia,
				date,
				time: activity.attributes.Horario.slice(0, 5) || null,
				price: +activity.attributes.Precio,
				description: activity.attributes.Descripcion
			};
		});
	}
	return {
		// events: events2,
		events,
		activities: activities || []
	};
}
