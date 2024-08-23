<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	let status = '';
	const handleSubmit = async (data: any) => {
		status = 'Enviando...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			// status = result.message || 'Success';
			status = 'El Formulario fue enviado con éxito. Gracias por contactarnos.';
		}
	};
</script>

<div
	class="my-auto flex h-[430px] items-center justify-center gap-4 rounded-lg border border-slate-700/20 bg-white/50 p-4 shadow-sm md:p-8"
>
	<form on:submit|preventDefault={handleSubmit} class="mb-3 h-fit w-full space-y-4">
		<input type="hidden" name="access_key" value="213afa20-2c8e-435b-a577-49747fb62f16" />
		<input
			type="text"
			name="name"
			placeholder="Nombre"
			required
			class="w-full rounded-md border border-slate-900/10 p-4"
		/>
		<input
			type="email"
			name="email"
			placeholder="Email"
			required
			class="w-full rounded-md border border-slate-900/10 p-4"
		/>
		<textarea
			name="message"
			placeholder="Su mensaje"
			required
			rows="3"
			class="w-full rounded-md border border-slate-900/10 p-4"
		></textarea>
		<div class="flex items-center gap-4">
			<Button type="submit" class="rounded-md bg-emerald-600 px-8 py-4 text-white">Enviar</Button>
			<div class="text-lg font-semibold tracking-wide text-emerald-600">{status}</div>
		</div>
	</form>
</div>
