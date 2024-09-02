<script lang="ts">
	import BannerPages from '$lib/components/BannerPages.svelte';
</script>

<BannerPages img="images/fogata-san-juan.jpg">
	<!-- <h1 class="">El espacio</h1> -->
</BannerPages>

<div class="mt-[400px]">
	<h1 class="mb-4 text-[2.4rem] font-thin">Nosotras</h1>

	<div class="grid w-full gap-4 text-lg font-light tracking-wide lg:grid-cols-2 lg:gap-8">
		<div class="h-full w-full overflow-hidden rounded-lg">
			<img src="/images/staff.jpg" alt="" class="h-full w-full object-cover" />
		</div>
		<div
			class="flex h-full flex-col justify-center gap-4 rounded-lg border-slate-900/10 bg-white p-4 shadow-md md:p-6"
		>
			<h2 class="text-2xl font-light">CRA Productora</h2>
			<p>
				Susana Asuaga y Alicia Escardó gestionan la productora cultural CRA desde hace diez años.
				Organizan eventos y festivales, en Montevideo y otros departamentos (Festival de Jazz,
				Semana Negra, Noche de San Juan, Ferias del Libro, Milongas de Febrero, 100 en 1 día, entre
				otros).
			</p>
			<p>
				En 2019 abrieron este espacio en La Floresta, para contar con un centro propio como sede
				para ofrecer eventos y festivales culturales para todas las edades. En estos cinco años,
				artistas de la música, el teatro, el stand-up, la literatura y otras ramas artísticas han
				pasado por sus salas para ofrecer su arte al público.
			</p>
		</div>
	</div>

	<div class="mt-4 grid min-h-[300px] w-full gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
		<div class="h-full w-full overflow-hidden rounded-lg">
			<img src="/images/proyector-colores.jpg" alt="" class="h-full w-full object-cover" />
		</div>
		<div class="h-full w-full overflow-hidden rounded-lg">
			<img src="/images/fogata-san-juan.jpg" alt="" class="h-full w-full object-cover" />
		</div>
		<div class="h-full w-full overflow-hidden rounded-lg">
			<img src="/images/vista-arriba-hotel.jpg" alt="" class="h-full w-full object-cover" />
		</div>
	</div>
</div>
