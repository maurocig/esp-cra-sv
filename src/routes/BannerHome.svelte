<script>
	import { ChevronRight, Settings } from 'lucide-svelte';
</script>

<div
	class="absolute left-0 top-0 h-[400px] w-full max-w-[calc(100vw-250px)] overflow-hidden shadow-md md:left-[250px]"
>
	<a
		class="absolute right-5 top-5 z-50 h-[30px] w-[30px] text-white opacity-0 transition hover:opacity-50"
		href="https://strapi-production-c8d7.up.railway.app/admin/"
		target="_blank"
	>
		<Settings />
	</a>

	<img
		src="images/interior-cartel.jpg"
		alt="Hall de Espacio CRA"
		class="h-full w-full object-cover object-center lg:h-full"
	/>
	<div
		class="absolute bottom-0 flex h-[40%] w-full flex-col items-end justify-center bg-gradient-to-r from-white/60 to-orange-200/30 p-6 shadow-md backdrop-blur md:left-0 lg:h-full lg:w-[38%] lg:p-8 xl:w-[30%]"
	>
		<span class="mb-4 w-full text-3xl font-semibold text-slate-800 drop-shadow-lg lg:text-4xl"
			>El Centro cultural de <br class="hidden lg:block" /> La Floresta</span
		>
		<a href="/espacio" class="flex w-full items-center gap-2 text-xl transition hover:opacity-75"
			>Conocé nuestro espacio <ChevronRight /></a
		>
		<!-- <span class="font-bold text-slate-600">Viernes 13 de Julio</span> -->
		<!-- <span class="font-bold text-slate-600">23:00 Hs</span> -->
	</div>
</div>
