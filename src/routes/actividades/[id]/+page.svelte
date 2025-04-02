<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
	import { ArrowLeft, ArrowLeftCircle, Calendar, Clock } from 'lucide-svelte';

	const { activities } = $page.data;
	const activity = activities.find((activity: any) => activity.id === +$page.params.id);
	const { label, day, time } = activity;
</script>

<div class="relative">
	<div class="absolute left-8 top-8 z-40 text-4xl text-white/90 transition hover:opacity-80">
		<!-- {#if browser} -->
		<a class="text-4xl hover:cursor-pointer" onclick={() => window.history.back()}>
			<ArrowLeftCircle size={38} class="drop-shadow-very-dark shadow-black" strokeWidth={1.5} />
		</a>
		<!-- {/if} -->
	</div>
</div>
<ActivityCard parentClass="pointer-events-none" data={activity} showDescription={true} />
