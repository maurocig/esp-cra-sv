<script>
	import { Building, HomeIcon, InfoIcon, Mail, Palette, Ticket } from 'lucide-svelte';
	import '../app.css';
	import Nav from './Nav.svelte';
	import Sidebar from './Sidebar.svelte';

	const { children } = $props();
</script>

<!-- <slot /> -->
<Nav
	links={[
		{ name: 'Inicio', href: '/' },
		{ name: 'Eventos', href: '/eventos' },
		{ name: 'Actividades', href: '/actividades' },
		{ name: 'El Espacio', href: '/espacio' },
		{ name: 'Nosotros', href: '/nosotros' },
		{ name: 'Contacto', href: '/contacto' }
	]}
/>

<div class="w-full">
	<Sidebar
		links={[
			{ name: 'Inicio', href: '/', icon: HomeIcon },
			{ name: 'Eventos', href: '/eventos', icon: Ticket },
			{ name: 'Actividades', href: '/actividades', icon: Palette },
			{ name: 'El Espacio', href: '/espacio', icon: Building },
			{ name: 'Nosotros', href: '/nosotros', icon: InfoIcon },
			{ name: 'Contacto', href: '/contacto', icon: Mail }
		]}
	/>
	<main
		class="mx-auto mt-[45px] h-full min-h-[100vw-70px] w-full px-4 py-10 md:ml-[250px] md:mt-0 md:min-h-full md:w-[calc(100vw-250px)] xl:mr-[250px] xl:p-6"
	>
		<div class="mx-auto w-full max-w-7xl">
			{@render children()}
		</div>
	</main>
</div>
