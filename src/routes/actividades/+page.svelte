<script lang="ts">
	import { page } from '$app/stores';
	import ActivityCard from '$lib/components/ActivityCard.svelte';

	const { activities } = $page.data;
</script>

<h1 class="mb-2 text-[2.4rem] font-thin">Talleres y actividades</h1>
<div class="grid w-full gap-4 lg:grid-cols-3 xl:gap-6">
	{#each activities as activity}
		<ActivityCard data={activity} parentClass="h-fit" />
	{/each}
</div>
