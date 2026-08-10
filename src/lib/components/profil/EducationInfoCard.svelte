<script lang="ts">
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import ClipboardListIcon from '@lucide/svelte/icons/clipboard-list';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import LandmarkIcon from '@lucide/svelte/icons/landmark';
	import EditButton from './EditButton.svelte';
	import InfoField from './InfoField.svelte';
	import type { EducationInfo } from '$lib/profil-data';

	let { info }: { info: EducationInfo } = $props();

	const fields = $derived([
		{
			id: 'pendidikan',
			icon: GraduationCapIcon,
			label: 'Pendidikan Terakhir',
			value: info.pendidikanTerakhir
		},
		{
			id: 'kampus',
			icon: LandmarkIcon,
			label: 'Nama Perguruan Tinggi',
			value: info.perguruanTinggi
		},
		{ id: 'prodi', icon: BookOpenIcon, label: 'Program Studi', value: info.programStudi },
		{ id: 'ipk', icon: ClipboardListIcon, label: 'IPK Terakhir', value: info.ipk }
	]);
</script>

<div class="rounded-[14px] bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center justify-between gap-3">
		<div class="flex items-center gap-2.5">
			<GraduationCapIcon class="size-4.5 text-(--brand-600)" />
			<h2 class="text-[15.5px] font-bold text-(--navy-950)">Data Pendidikan</h2>
		</div>
		<EditButton />
	</div>

	<div class="grid gap-x-7 gap-y-5.5 sm:grid-cols-2">
		{#each fields as field (field.id)}
			<InfoField icon={field.icon} label={field.label} value={field.value} />
		{/each}
	</div>
</div>
