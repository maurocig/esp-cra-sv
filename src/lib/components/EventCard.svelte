<script lang="ts">
	import type { Event } from '$lib/types';
	import { cn } from '$lib/utils';
	import { Calendar, Clock, Ticket } from 'lucide-svelte';

	type Side = {
		enum: 'start' | 'end';
	};

	const {
		data = {},
		imageClass = '',
		parentClass = '',
		overlayClass = '',
		vertical = false,
		color = 'red'
	} = $props();

	const { label, img, href, date, time, price, description } = data as Event;
</script>

<a
	{href}
	class={cn(
		'duration-800 group relative z-40 flex flex-col overflow-hidden rounded-md border-0 opacity-85 transition duration-700 hover:opacity-100 md:flex-row',
		parentClass,
		vertical && 'md:flex-col'
	)}
>
	<div
		class="absolute left-[calc(50%-23px)] top-[2px] z-50 aspect-square w-[46px] rounded-full bg-slate-100 md:top-[-30px]"
	></div>
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
			class="h-full w-full object-cover object-center transition duration-[8000ms] ease-in-out group-hover:scale-125"
		/>
	</div>

	<!-- overlay -->
	<div
		class={cn(
			'order-2 flex h-[50%] w-full flex-col justify-between rounded-bl-md rounded-br-md p-4 shadow-sm backdrop-blur-lg transition duration-700 group-hover:shadow-md md:order-none md:h-full md:w-[50%] lg:p-6',
			`bg-${color}-400`,
			overlayClass,
			vertical && 'md:h-[50%] md:w-full'
		)}
	>
		<div>
			<span class="text-3xl font-normal md:text-2xl xl:text-4xl">{label}</span>
			<p class="mb-4 mt-2">{description}</p>
		</div>
		<div class="font-light">
			<div class="ml-2 mt-2 flex items-center gap-2">
				<Calendar size={16} strokeWidth={2.5} />
				<span class="capitalize">{date}</span>
			</div>
			<div class="ml-2 hidden items-center gap-2 xl:flex">
				<Clock size={16} strokeWidth={2.5} />
				<span class="">{time} hs.</span>
			</div>
			<div class="ml-2 hidden items-center gap-2 xl:flex">
				<Ticket size={16} strokeWidth={2.5} />
				{#if price === 0}
					<span>Entrada libre</span>
				{:else}
					<span class="">${price}</span>
				{/if}
			</div>
		</div>
	</div>
	<div
		class="absolute bottom-[-25px] left-[calc(50%-21px)] z-40 aspect-square w-[42px] rounded-full bg-slate-100 group-hover:shadow-inner md:bottom-[5px]"
	></div>
	<div class="z-50 h-[38px] w-[39px] self-center bg-slate-100"></div>
</a>
