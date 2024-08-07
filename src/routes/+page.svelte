<script>
	import { page } from '$app/stores';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { ArrowRight, ChevronRight } from 'lucide-svelte';
	import BannerHome from './BannerHome.svelte';

	const { events, activities } = $page.data;
</script>

<div class="flex w-full flex-col">
	<BannerHome />

	<!-- <div class="grid w-full gap-4 lg:grid-cols-3 lg:gap-6">
		<div class="aspect-[3/2] w-full rounded-lg bg-green-500"></div>
	</div> -->

	<!-- EVENTOS -->
	<h2 class="mt-[350px] text-[2.4rem] font-thin md:mb-2 md:mt-[400px]">Próximos eventos</h2>

	<div class="grid w-full md:gap-4 lg:grid-cols-3 xl:gap-6">
		<EventCard data={events[events.length - 1]} />
		<EventCard data={events[events.length - 2]} />
		<EventCard data={events[events.length - 3]} />
	</div>
	<a
		href="/eventos"
		class="mt-[-10px] flex w-full items-center justify-end gap-4 p-4 text-xl font-light text-slate-600 transition hover:opacity-85"
		>Ver todos <ArrowRight class="" /></a
	>

	<!-- ACTIVIDADES -->
	<h2 class="mb-2 text-[2.4rem] font-thin">Talleres y actividades</h2>
	<div class="grid w-full gap-4 lg:grid-cols-3 xl:gap-6">
		<ActivityCard data={activities[0]} />
		<ActivityCard data={activities[1]} />
		<ActivityCard data={activities[2]} />
	</div>
	<a
		href="/actividades"
		class="mt-[15px] flex w-full items-center justify-end gap-4 p-4 text-xl font-light text-slate-600 transition hover:opacity-85"
		>Ver todos <ArrowRight class="" /></a
	>

	<div class="mb-[-10px] grid w-full gap-4 lg:grid-cols-3 lg:gap-6"></div>
</div>
