<script lang="ts">
	import BannerPages from '$lib/components/BannerPages.svelte';
</script>

<BannerPages img="images/interior-cartel.jpg">
	<!-- <h1 class="">El espacio</h1> -->
</BannerPages>

<div class="mt-[400px]">
	<h1 class="mb-4 text-[2.4rem] font-thin">El Espacio</h1>

	<div class="grid w-full grid-cols-1 gap-4 text-lg font-light tracking-wide lg:gap-8">
		<div class="flex h-fit flex-col gap-4 lg:flex-row lg:gap-8">
			<div
				class="h-fit w-full space-y-4 rounded-lg border border-slate-900/10 bg-white p-4 shadow-sm md:p-8 lg:w-[60%]"
			>
				<h2 class="text-2xl font-light">¿Qué es?</h2>
				<p class="flex h-full w-full items-center">
					Este ESPACIO DE CREACIÓN Y ARTE nace con la vocación de ofrecer un lugar donde encontrarse
					y disfrutar de propuestas y actividades relacionadas con el entretenimiento y la cultura.
					Desde talleres y clases semanales de diferentes disciplinas artísticas, hasta actividades
					y espectáculos puntuales: obras de teatro, cine-forum, toques, recitales, milongas y
					exposiciones.
				</p>
			</div>

			<div
				class="relative h-auto min-h-[300px] w-full overflow-hidden rounded-lg border border-slate-900/10 object-cover shadow-md md:grow-0 lg:min-h-0 lg:w-[40%]"
			>
				<img src="images/pinceles.jpeg" class="absolute h-full w-full object-cover" alt="" />
			</div>
		</div>

		<div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
			<div
				class="relative order-2 min-h-[300px] w-full overflow-hidden rounded-lg border border-slate-900/10 shadow-md md:min-h-[300px] lg:order-1 lg:min-h-0 lg:w-[50%]"
			>
				<!-- <img src="images/tambores.jpg" class="absolute h-full w-full object-cover" alt="" /> -->
				<img src="images/fachada.jpg" class="absolute h-full w-full object-cover" alt="" />
			</div>

			<div
				class="order-1 h-fit w-full space-y-4 rounded-lg border border-slate-900/10 bg-white p-4 shadow-sm md:p-8 lg:order-2 lg:w-[50%]"
			>
				<h2 class="text-2xl font-light">El Espacio</h2>
				<p>
					Está ubicado en la calle Argentina y 33, en La Floresta, Canelones, y forma parte de un
					edificio patrimonial, estilo artdeco marítimo, construido en los años 40. La belleza y
					armonía de sus instalaciones, la iluminación, la amplitud de los espacios y la
					versatilidad que ofrecen para las distintas actividades, lo hacen un lugar único en la
					Costa de Oro.
				</p>
			</div>
		</div>

		<div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
			<div
				class="h-fit w-full space-y-4 rounded-lg border border-slate-900/10 bg-white p-4 shadow-sm md:p-8 lg:w-[40%]"
			>
				<!-- <h2 class="text-2xl font-light">¿Qué es?</h2> -->
				<p>
					Espacio CRA te recibe de <strong>martes a domingo</strong> a partir de las
					<strong>15h</strong>. Paseo de compras, diseño y artesanías, cafetería, librería,
					talleres, charlas, música y teatro. Un lugar único en la costa de oro para vivir el arte y
					la cultura durante todo el año. En el Edificio La Floresta, calle Argentina y 33.
				</p>
			</div>

			<div
				class="relative h-auto min-h-[300px] w-full grow-0 overflow-hidden rounded-lg border border-slate-900/10 object-cover shadow-md lg:min-h-0 lg:w-[60%]"
			>
				<img src="images/tambores.jpg" class="absolute h-full w-full object-cover" alt="" />
			</div>
		</div>
	</div>
</div>
