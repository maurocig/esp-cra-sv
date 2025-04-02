import type { Event } from '$lib/types';

const colors = ['#818cf8', '#34d399', '#fde047', '#f87171'];

export async function load() {
	const eventsData = await fetch(
		'https://strapi-production-c8d7.up.railway.app/api/eventos?populate=*',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	const eventsJson = await eventsData.json();

	const events = eventsJson.data.map((event: any) => {
		const actualDate = new Date(event.attributes.Fecha);
		const date = actualDate
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
			color,
			actualDate
		};
	});

	const currentEvents = events.filter((event: Event) => {
		const date = new Date(event.actualDate);
		const today = new Date();
		console.log(date, today);
		return date > today;
	});

	const lastThreeEvents = currentEvents.slice(-3);

	// fetch activities
	const activitiesData = await fetch(
		'https://strapi-production-c8d7.up.railway.app/api/actividades?populate=*',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	const activitiesJson = await activitiesData.json();
	let activities = [];

	if (activitiesJson.data) {
		activities = activitiesJson.data.map((activity: any) => {
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
				day2: activity.attributes.Dia_2,
				date,
				time: activity.attributes.Horario.slice(0, 5) || null,
				price: +activity.attributes.Precio,
				description: activity.attributes.Descripcion
			};
		});
	}
	return {
		// events: events2,
		currentEvents,
		events,
		activities: activities.slice().reverse(),
		lastThreeEvents
	};
}
