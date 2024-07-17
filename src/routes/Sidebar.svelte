<script lang="ts">
	import { page } from '$app/stores';
	import NavLogo from '$lib/components/NavLogo.svelte';
	import { HomeIcon, InfoIcon, Mail, type Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	type Link = {
		name: string;
		href: string;
		icon?: ComponentType<Icon>;
	};

	export let links: Link[] = [
		{ name: 'Inicio', href: '/', icon: HomeIcon },
		// { name: 'Eventos', href: '/eventos', icon: '' },
		// { name: 'Talleres', href: '/talleres' },
		// { name: 'El Espacio', href: '/espacio' },
		{ name: 'Nosotros', href: '/nosotros', icon: InfoIcon },
		{ name: 'Contacto', href: '/contacto', icon: Mail }
	];

	// export let links = [{ name: 'Inicio', href: '/', icon: HomeIcon }];
</script>

<aside
	class="fixed bottom-0 left-0 mt-[70px] hidden h-full w-[250px] flex-col items-end border-r bg-white/80 pt-8 md:mt-0 md:flex lg:mx-auto"
>
	<!-- Logo -->
	<a
		href="/"
		class="mb-8 hidden h-[50px] w-full items-center justify-center py-4 text-[1.4rem] md:flex"
	>
		<div
			class="font-quicksand mt-[18px] min-w-[90px] overflow-visible text-center font-light text-gray-700 drop-shadow-lg"
		>
			Espacio
		</div>
		<img
			src="images/logo.png"
			alt="logo"
			class="h-[50px] object-contain object-left drop-shadow-md"
		/>
	</a>

	<!-- Content -->
	<div class="flex h-fit w-full flex-col gap-2">
		{#if links.length}
			{#each links as { name, href, icon }, i}
				<a
					{href}
					aria-current={$page.url.pathname === href}
					class="flex w-full justify-center border-0 border-b border-t border-opacity-0 text-slate-500 transition hover:text-slate-800 aria-current:border-slate-950/10 aria-current:border-opacity-80 aria-current:bg-slate-100/80 aria-current:text-slate-800 aria-current:shadow-inner"
				>
					<div class="flex w-[180px] items-center justify-start gap-4 px-6 py-3">
						<svelte:component this={icon} focusable="false" />
						{name}
					</div>
				</a>
				{#if i === 2}
					<hr class="mx-6 my-2" />
				{/if}
			{/each}
		{/if}
	</div>
</aside>

<style>
</style>
