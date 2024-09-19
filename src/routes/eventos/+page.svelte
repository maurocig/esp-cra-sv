<script lang="ts">
	import { page } from '$app/stores';
	import EventCard from '$lib/components/EventCard.svelte';
	import type { Event } from '$lib/types';

	const { events, currentEvents } = $page.data;

	const pastEvents = events.filter((event: Event) => new Date(event.actualDate) < new Date());
	const colors = ['#f87171', '#34d399', '#818cf8', '#fde047'];
</script>

<div class="w-full space-y-6">
	<div>
		<h1 class="text-[2.4rem] font-thin md:mb-2">Próximos eventos</h1>
		<div class="grid w-full gap-4 lg:grid-cols-3 xl:gap-6">
			{#if currentEvents.length === 0}
				<p
					class="col-span-3 w-fit rounded-lg border-gray-900/10 bg-white px-6 py-4 text-lg font-light text-slate-600 shadow-md"
				>
					No hay eventos programados
				</p>
			{:else}
				{#each currentEvents as event, index}
					<EventCard data={event} />
				{/each}
			{/if}
		</div>
	</div>

	<div>
		<h1 class="mb-[-10px] text-[2.4rem] font-thin md:mb-2">Eventos anteriores</h1>
		<div class="grid w-full gap-4 lg:grid-cols-3 xl:gap-6">
			{#if pastEvents.length === 0}
				<p class="col-span-3 text-lg font-light text-slate-600">No hay eventos próximos</p>
			{:else}
				{#each pastEvents as event, index}
					<EventCard data={event} />
				{/each}
			{/if}
		</div>
	</div>
</div>
