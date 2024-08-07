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
		color = 'red',
		style = ''
	} = $props();

	const { label, img, href, date, time, price, description, id } = data as Event;
</script>

<a
	href="eventos/{id}"
	class={cn(
		'duration-800 group relative z-40 flex h-[400px] flex-col overflow-hidden border-0 opacity-85 transition duration-700 hover:opacity-100 md:flex-col lg:h-[500px] ',
		parentClass
	)}
>
	<div
		class="absolute left-[calc(50%-23px)] top-0 z-50 aspect-square w-[46px] rounded-full bg-slate-100 md:top-[-35px]"
	></div>
	<div
		{style}
		class={cn(
			'order-1 h-[60%] w-full overflow-hidden rounded-tl-md rounded-tr-md md:order-none md:h-full md:w-[60%]',
			'md:w-full',
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
			'order-2 flex min-h-[45%] w-full flex-col rounded-bl-md rounded-br-md p-4 shadow-sm backdrop-blur-lg transition duration-700 group-hover:shadow-md md:order-none md:min-h-[40%] lg:min-h-[50%] lg:justify-between lg:p-6',
			overlayClass
		)}
		{style}
	>
		<div>
			<span class="text-3xl font-normal md:text-2xl xl:text-4xl">{label}</span>
			<p class="mb-4 mt-2">{description}</p>
		</div>
		<div class="font-light">
			<div class="ml-2 mt-2 flex items-center gap-2">
				<Calendar size={16} strokeWidth={2.5} />
				<span class="text-nowrap capitalize">{date}</span>
			</div>
			<div class="ml-2 hidden items-center gap-2 md:flex">
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
		class="absolute bottom-[-30px] left-[calc(50%-21px)] z-40 aspect-square w-[42px] rounded-full bg-slate-100 group-hover:shadow-inner md:bottom-[-10px]"
	></div>
	<div class="z-50 h-[38px] w-[39px] self-center bg-slate-100"></div>
</a>

<style>
	.red {
		background-color: red;
	}
	.blue {
		background-color: blue;
	}
	.green {
		background-color: green;
	}
</style>
