<script lang="ts">
	import { cn } from '$lib/utils';
	import { Calendar, Clock, Ticket } from 'lucide-svelte';

	type Side = {
		enum: 'start' | 'end';
	};

	type Activity = {
		label: string;
		img: string;
		href: string;
		date: string;
		day: string;
		time: string;
		price: string;
		description: string;
	};

	const {
		data = {},
		imageClass = '',
		parentClass = '',
		overlayClass = '',
		vertical = false
	} = $props();

	const { label, img, href, date, day, time, price, description } = data as Activity;
</script>

<a
	{href}
	class={cn(
		'duration-800 group relative z-30 flex min-h-[400px] flex-col overflow-hidden rounded-md border-0 opacity-85 transition duration-700 hover:opacity-100 md:flex-row',
		parentClass
	)}
>
	<div class={cn('h-[60%] w-full overflow-hidden md:h-full ', imageClass)}>
		<img
			src={img}
			alt="Evento 2"
			class="absolute h-full w-full object-cover object-center transition duration-[8000ms] ease-in-out group-hover:scale-125"
		/>
	</div>

	<!-- overlay -->
	<div
		class={cn(
			'absolute bottom-0 flex min-h-[40%] w-full flex-col justify-between bg-gradient-to-t from-white/60 to-white/30 p-4 shadow-sm backdrop-blur-md transition duration-700 group-hover:shadow-md md:h-[35%] md:w-full lg:p-6',
			overlayClass
		)}
	>
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
</a>
