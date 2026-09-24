<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import AuthSelect from '$lib/components/auth/AuthSelect.svelte';
	import { PERGURUAN_TINGGI } from '$lib/data-dik-data';
	import { JENJANG_DIK, type DataDikInput } from '$lib/schemas/data-dik';

	let { superform }: { superform: SuperForm<DataDikInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;
</script>

<div class="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
	<AuthSelect
		id="jenisPendidikan"
		label="Jenis Pendidikan"
		placeholder="Pilih jenjang pendidikan"
		options={JENJANG_DIK}
		bind:value={$form.jenisPendidikan}
		error={$errors.jenisPendidikan?.[0]}
	/>

	<AuthField
		id="fakultas"
		label="Fakultas"
		placeholder="Masukkan fakultas"
		bind:value={$form.fakultas}
		error={$errors.fakultas?.[0]}
	/>

	<AuthField
		id="programStudi"
		label="Program Studi"
		placeholder="Masukkan program studi"
		bind:value={$form.programStudi}
		error={$errors.programStudi?.[0]}
	/>

	<AuthField
		id="tahunLulus"
		label="Tahun Lulus"
		inputmode="numeric"
		maxlength={4}
		placeholder="Contoh: 2022"
		bind:value={$form.tahunLulus}
		error={$errors.tahunLulus?.[0]}
	/>

	<AuthSelect
		id="namaPerguruanTinggi"
		label="Nama Perguruan Tinggi"
		placeholder="Masukkan nama perguruan tinggi"
		options={PERGURUAN_TINGGI}
		bind:value={$form.namaPerguruanTinggi}
		error={$errors.namaPerguruanTinggi?.[0]}
	/>

	<AuthField
		id="gelar"
		label="Gelar"
		placeholder="Masukkan gelar (jika ada)"
		bind:value={$form.gelar}
		error={$errors.gelar?.[0]}
	/>
</div>
