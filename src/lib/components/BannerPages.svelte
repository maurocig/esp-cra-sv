<script lang="ts">
	import type { Snippet } from 'svelte';

	const { img, children }: { img: string; children?: Snippet } = $props();
</script>

<div
	class="absolute left-0 top-0 h-[400px] w-full overflow-hidden shadow-md md:left-[250px] md:w-[calc(100vw-250px)]"
>
	<img src={img} alt="Hall de Espacio CRA" class="h-full w-full object-cover object-center" />

	<div
		class="absolute bottom-0 left-0 flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-orange-200/30 p-6 shadow-md lg:p-8"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
