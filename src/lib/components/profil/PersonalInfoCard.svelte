<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import UserIcon from '@lucide/svelte/icons/user';
	import UsersIcon from '@lucide/svelte/icons/users';
	import VenusAndMarsIcon from '@lucide/svelte/icons/venus-and-mars';
	import EditButton from './EditButton.svelte';
	import InfoField from './InfoField.svelte';
	import type { PersonalInfo } from '$lib/profil-data';

	let { info }: { info: PersonalInfo } = $props();

	const fields = $derived([
		{ id: 'nama', icon: UsersIcon, label: 'Nama Lengkap', value: info.namaLengkap },
		{ id: 'phone', icon: PhoneIcon, label: 'Phone', value: info.phone },
		{ id: 'lahir', icon: CalendarIcon, label: 'Tanggal Lahir', value: info.tanggalLahir },
		{ id: 'email', icon: MailIcon, label: 'Email Address', value: info.email },
		{ id: 'gender', icon: VenusAndMarsIcon, label: 'Jenis Kelamin', value: info.jenisKelamin },
		{ id: 'domisili', icon: MapPinIcon, label: 'Domisili', value: info.domisili }
	]);
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center justify-between gap-3">
		<div class="flex items-center gap-2.5">
			<UserIcon class="size-4.5 text-(--brand-600)" />
			<h2 class="text-[15.5px] font-bold text-(--navy-950)">Personal Informasi</h2>
		</div>
		<EditButton />
	</div>

	<div class="grid gap-x-7 gap-y-5.5 sm:grid-cols-2">
		{#each fields as field (field.id)}
			<InfoField icon={field.icon} label={field.label} value={field.value} />
		{/each}
	</div>
</div>
