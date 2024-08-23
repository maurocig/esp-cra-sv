<script lang="ts">
	import { browser } from '$app/environment';
	import { navigating, page } from '$app/stores';
	import { ArrowLeft, Calendar, Clock, Ticket } from 'lucide-svelte';

	// const { color = '#f87171' } = $props();
	const { events } = $page.data;
	const id = +$page.params.id;
	const event = events.find((event: any) => event.id === id);
	const { img, label, description, date, time, price, color } = event;

	const colors = ['#f87171', '#34d399', '#fde047'];
	// const color = colors[$page.params.id % colors.length];
</script>

<div class="relative flex flex-col overflow-hidden rounded-md lg:h-[400px] lg:flex-row">
	<div
		class="absolute left-8 top-8 z-40 text-white/90 transition hover:opacity-80 lg:text-slate-900/90"
	>
		{#if browser}
			<a class="hover:cursor-pointer" onclick={() => window.history.back()}>
				<ArrowLeft class="drop-shadow-md" />
			</a>
		{/if}
	</div>
	<div
		class="overlay-hidden relative mx-auto h-[200px] w-full rounded-md bg-green-500 md:h-[400px] lg:order-2 lg:h-full lg:w-[60%]"
	>
		<img src={img} alt="" class="h-full w-full object-cover object-center" />
		<!-- <div
		class="absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-slate-100"
	></div> -->
	</div>

	<div
		class="relative flex h-full w-full flex-col overflow-hidden p-4 lg:order-1 lg:mt-0 lg:w-[40%] lg:justify-center lg:p-6"
		style={'background-color:' + color + ';'}
	>
		<div class="">
			<span class="text-2xl font-normal xl:text-4xl">{label}</span>
			<p class="mb-4 mt-2">{description}</p>
		</div>
		<div class="font-light">
			<div class="ml-2 mt-2 flex items-center gap-2">
				<Calendar size={16} strokeWidth={2.5} />
				<span class="capitalize">{date}</span>
			</div>
			<div class="ml-2 flex items-center gap-2">
				<Clock size={16} strokeWidth={2.5} />
				<span class="">{time}</span>
			</div>
			<div class="ml-2 flex items-center gap-2">
				<Ticket size={16} strokeWidth={2.5} />
				{#if price === 0}
					<span class="">Entrada libre</span>
				{:else}
					<span class="">${price}</span>
				{/if}
			</div>
		</div>
	</div>
</div>
