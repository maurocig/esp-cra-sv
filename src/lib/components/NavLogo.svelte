<script lang="ts">
	export let href = '/';
	export let logo = 'icons/logo.svg';
</script>

<a {href} class="flex h-[90%] w-full items-center gap-1 py-3 text-xl">
	<div
		class="font-quicksand mt-[11px] overflow-visible font-light tracking-tight text-gray-700 drop-shadow-lg"
	>
		Espacio
	</div>
	<img src={logo} alt="logo" class="h-full object-contain object-left drop-shadow-md" />
</a>
