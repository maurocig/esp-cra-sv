<script lang="ts">
	import { page } from '$app/stores';
	import EventCard from '$lib/components/EventCard.svelte';

	const { events } = $page.data;
	const colors = ['#f87171', '#34d399', '#818cf8', '#fde047'];
</script>

<h1 class="mb-2 text-[2.4rem] font-thin">Próximos eventos</h1>

<div class="grid w-full gap-4 lg:grid-cols-3 xl:gap-6">
	{#each events as event, index}
		<EventCard data={event} />
	{/each}
</div>
