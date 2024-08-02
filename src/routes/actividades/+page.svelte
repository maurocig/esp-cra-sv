<script lang="ts">
	import { page } from '$app/stores';

	const { activities } = $page.data;
</script>

<h1>Actividades</h1>

{#each activities as activity}
	<div class="grid w-full gap-4 lg:grid-cols-3 xl:gap-6">
		{activity.label}
	</div>
{/each}
