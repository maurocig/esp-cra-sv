<script lang="ts">
	import { page } from '$app/stores';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import NavLogo from '$lib/components/NavLogo.svelte';
	import * as Sheet from '$lib/components/ui/sheet';

	const { links } = $props();
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-gray-900/10 bg-white/70 px-4 shadow-sm backdrop-blur md:hidden"
>
	<div class="mx-auto flex h-[70px] w-full max-w-7xl items-center justify-between px-4">
		<NavLogo logo="images/logo.png" />

		<MobileMenu buttonClass="block md:hidden" {links} />
	</div>
</nav>

<style>
	li a[aria-current='true'] {
		@apply border-b-2 border-gray-600;
	}
</style>
