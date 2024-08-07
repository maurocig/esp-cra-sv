<script lang="ts">
	import { page } from '$app/stores';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
	import { Calendar, Clock } from 'lucide-svelte';

	const { activities } = $page.data;
	const activity = activities.find((activity: any) => activity.id === +$page.params.id);
	const { label, day, time } = activity;
</script>

<ActivityCard data={activity} />
