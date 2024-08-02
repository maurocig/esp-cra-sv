<script lang="ts">
	import { page } from '$app/stores';
	import { Calendar, Clock } from 'lucide-svelte';

	const { events } = $page.data;
	const event = events.find((event: any) => event.id === +$page.params.id);
	const { label, day, time } = event;
</script>

<div class="w-full overflow-hidden rounded-md">
	<div>
		<span class="text-2xl font-normal xl:text-4xl">{label}</span>
		<!-- <p class="mb-4 mt-2">{description}</p> -->
	</div>
	<div class="font-light">
		<div class="ml-2 mt-2 flex items-center gap-2">
			<Calendar size={16} strokeWidth={2.5} />
			<span class="">{day}</span>
		</div>
		<div class="ml-2 flex items-center gap-2">
			<Clock size={16} strokeWidth={2.5} />
			<span class="">{time}</span>
		</div>
		<!-- <div class="ml-2 hidden items-center gap-2 xl:flex">
				<Ticket size={16} strokeWidth={2.5} />
				<span class="">{price}</span>
			</div> -->
	</div>
</div>
