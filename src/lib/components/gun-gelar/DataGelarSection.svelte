<script lang="ts">
	import AwardIcon from '@lucide/svelte/icons/award';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import ClipboardListIcon from '@lucide/svelte/icons/clipboard-list';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import SchoolIcon from '@lucide/svelte/icons/school';
	import type { SuperForm } from 'sveltekit-superforms';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import AuthSelect from '$lib/components/auth/AuthSelect.svelte';
	import { JENIS_PENGAJUAN, JENJANG_PENDIDIKAN, type GunGelarInput } from '$lib/schemas/gun-gelar';

	let { superform }: { superform: SuperForm<GunGelarInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;
</script>

<div class="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
	<AuthSelect
		id="jenisPengajuan"
		label="Jenis Pengajuan"
		icon={ClipboardListIcon}
		placeholder="Pilih Jenis Pengajuan"
		options={JENIS_PENGAJUAN}
		bind:value={$form.jenisPengajuan}
		error={$errors.jenisPengajuan?.[0]}
	/>

	<AuthSelect
		id="jenjangPendidikan"
		label="Jenjang Pendidikan"
		icon={GraduationCapIcon}
		placeholder="Pilih Jenjang Pendidikan"
		options={JENJANG_PENDIDIKAN}
		bind:value={$form.jenjangPendidikan}
		error={$errors.jenjangPendidikan?.[0]}
	/>

	<AuthField
		id="programStudi"
		label="Program Studi"
		icon={BookOpenIcon}
		placeholder="Masukkan program studi"
		bind:value={$form.programStudi}
		error={$errors.programStudi?.[0]}
	/>

	<AuthField
		id="namaGelar"
		label="Nama Gelar"
		icon={AwardIcon}
		placeholder="Contoh: S.Tr.Kom"
		bind:value={$form.namaGelar}
		error={$errors.namaGelar?.[0]}
	/>

	<AuthField
		id="namaPerguruanTinggi"
		label="Nama Perguruan Tinggi"
		icon={SchoolIcon}
		placeholder="Masukkan nama perguruan tinggi"
		bind:value={$form.namaPerguruanTinggi}
		error={$errors.namaPerguruanTinggi?.[0]}
	/>

	<AuthField
		id="nomorIjazah"
		label="Nomor Ijazah"
		icon={IdCardIcon}
		placeholder="Masukkan nomor ijazah"
		bind:value={$form.nomorIjazah}
		error={$errors.nomorIjazah?.[0]}
	/>

	<AuthField
		id="tahunMasuk"
		label="Tahun Masuk"
		icon={CalendarIcon}
		inputmode="numeric"
		maxlength={4}
		placeholder="Contoh: 2022"
		bind:value={$form.tahunMasuk}
		error={$errors.tahunMasuk?.[0]}
	/>

	<AuthField
		id="tanggalLulus"
		label="Tanggal Lulus"
		icon={CalendarIcon}
		type="date"
		bind:value={$form.tanggalLulus}
		error={$errors.tanggalLulus?.[0]}
	/>
</div>
