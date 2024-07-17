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
		'duration-800 group relative z-40 flex min-h-[400px] flex-col overflow-hidden rounded-md border-0 opacity-85 transition duration-700 hover:opacity-100 md:flex-row',
		parentClass,
		vertical && 'md:flex-col'
	)}
>
	<div
		class={cn(
			'order-1 h-[60%] w-full overflow-hidden md:order-none md:h-full md:w-[60%]',
			vertical && 'md:h-[60%] md:w-full',
			imageClass
		)}
	>
		<img
			src={img}
			alt="Evento 2"
			class="absolute h-full w-full object-cover object-center transition duration-[8000ms] ease-in-out group-hover:scale-125"
		/>
	</div>

	<!-- overlay -->
	<div
		class={cn(
			'absolute bottom-0 flex h-[50%] w-full flex-col justify-between overflow-hidden rounded-bl-md rounded-br-md bg-gradient-to-t from-white/60 to-white/30 p-4 shadow-sm backdrop-blur-md transition duration-700 group-hover:shadow-md lg:p-6',
			overlayClass,
			vertical && 'md:h-[35%] md:w-full'
		)}
	>
		<div>
			<span class="text-lg font-normal md:text-2xl xl:text-4xl">{label}</span>
			<!-- <p class="mb-4 mt-2">{description}</p> -->
		</div>
		<div class="font-light">
			<div class="ml-2 mt-2 flex items-center gap-2">
				<Calendar size={16} strokeWidth={2.5} />
				<span class="">{day}</span>
			</div>
			<div class="ml-2 hidden items-center gap-2 xl:flex">
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
