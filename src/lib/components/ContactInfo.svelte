<script lang="ts">
	import { Clock, Mail, MapPin, Phone, Pin } from 'lucide-svelte';
	import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';

	type ContactInfo = {
		phone?: string;
		whatsapp?: string;
		email: string;
		address: string;
		hours?: string;
		instagram?: string;
		facebook?: string;
	};

	export let data: ContactInfo;
	export let parentClass: string = '';
</script>

<div class={`flex h-full flex-col space-y-2 ${parentClass}`}>
	{#if data.phone}
		<span class="flex items-center gap-3">
			<Phone size={18} /> <b>Teléfono:</b>
			{data.phone}
		</span>
	{/if}
	<a
		class="flex items-center gap-3 transition hover:text-emerald-600"
		href={`https://api.whatsapp.com/send?phone=59895084301`}
		target="_blank"
	>
		<div class="w-[18px]">
			<FaWhatsapp />
		</div>
		<b>Whatsapp:</b>
		{data.whatsapp}
	</a>
	<span class="flex items-center gap-3">
		<Mail size={18} /> <b>Email:</b>
		{data.email}
	</span>
	<a
		class="flex items-center gap-3 transition hover:text-emerald-500"
		href={`https://www.google.com/maps/place/Espacio+CRA/@-34.760546,-55.677573,16z/data=!4m6!3m5!1s0x959ff72d8bdcd6ed:0x617abc058716d6be!8m2!3d-34.7605462!4d-55.6775729!16s%2Fg%2F11hdxpc6j_!5m2!1e4!1e2?hl=en&entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D`}
	>
		<MapPin size={18} /> <b>Dirección:</b>
		{data.address}
	</a>
	{#if data.hours}
		<span class="flex items-center gap-3">
			<Clock size={18} /> <b>Horario:</b>
			{data.hours}
		</span>
	{/if}
</div>
