<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
	import ActivityCardSuggestion from '$lib/components/ActivityCardSuggestion.svelte';
	import { ArrowLeft, ArrowLeftCircle, ArrowRight, Calendar, Clock } from 'lucide-svelte';

	const { activities } = $page.data;

	let currentId = $state(+$page.params.id);

	function updateCurrentId(id: number) {
		currentId = id;
		window.scrollTo(0, 0);
	}

	let currentActivity = $derived(activities.find((activity: any) => activity.id === currentId));

	// const activity = activities.find((activity: any) => activity.id === +$page.params.id);

	const activitySuggestions = activities
		.slice(0, 7)
		.filter((activity: any) => activity.id !== currentActivity.id);
</script>

<div class="relative">
	<div class="absolute left-8 top-8 z-40 text-4xl text-white/90 transition hover:opacity-80">
		<!-- {#if browser} -->
		<a class="text-4xl hover:cursor-pointer" onclick={() => window.history.back()}>
			<ArrowLeftCircle size={38} class="shadow-black drop-shadow-very-dark" strokeWidth={1.5} />
		</a>
		<!-- {/if} -->
	</div>
</div>

<!-- Current activity card -->
<div
	class="group relative z-30 flex min-h-[500px] flex-col overflow-hidden rounded-md border-0 opacity-85 hover:opacity-100 md:flex-row"
>
	<div class="h-[60%] w-full overflow-hidden md:h-full">
		<img
			src={currentActivity.img}
			alt="Evento 2"
			class="absolute h-full w-full object-cover object-center transition duration-[8000ms] ease-in-out group-hover:scale-125"
		/>
	</div>

	<!-- overlay -->
	<div
		class="absolute bottom-0 flex min-h-[40%] w-full flex-col justify-between bg-gradient-to-t from-white/60 to-white/30 p-4 shadow-sm backdrop-blur-md transition duration-700 group-hover:shadow-md md:w-full lg:p-6"
	>
		<div>
			<span class="text-2xl font-semibold xl:text-4xl">{currentActivity.label}</span>
			<!-- <p class="mb-4 mt-2">{description}</p> -->
		</div>
		<div class="font-light">
			<div class="ml-1 flex max-w-3xl items-center gap-2 text-lg font-normal">
				{currentActivity.description}
			</div>
			<div class="ml-2 mt-2 flex items-center gap-2">
				<Calendar size={16} strokeWidth={2.5} />
				<span class=""
					>{currentActivity.day} {currentActivity.day2 && `y ${currentActivity.day2}`}</span
				>
			</div>
			<div class="ml-2 flex items-center gap-2">
				<Clock size={16} strokeWidth={2.5} />
				<span class="">{currentActivity.time}</span>
			</div>
			<!-- <div class="ml-2 hidden items-center gap-2 xl:flex">
				<Ticket size={16} strokeWidth={2.5} />
				<span class="">{price}</span>
			</div> -->
		</div>
	</div>
</div>

<div class="mt-6">
	<h1 class="mb-2 text-[2.2rem] font-thin">Otras actividades</h1>
	<div class="grid w-full gap-4 lg:grid-cols-3 xl:gap-6">
		{#each activitySuggestions.slice(0, 6) as activity, index}
			<button class="text-start" onclick={() => updateCurrentId(activity.id)}>
				<ActivityCard data={activity} parentClass="pointer-events-none" />
			</button>
		{/each}
	</div>
</div>

<a
	href="/actividades"
	class="mt-[15px] flex w-full items-center justify-end gap-4 p-4 text-xl font-light text-slate-600 transition hover:opacity-85"
	>Ver todas <ArrowRight class="" />
</a>
