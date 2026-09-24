<script lang="ts">
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import type { PersonelRecord } from '$lib/data-dik-data';

	let { personel }: { personel: PersonelRecord | undefined } = $props();

	const fields = $derived([
		{ id: 'personel-nama', label: 'Nama Lengkap', value: personel?.nama ?? '' },
		{ id: 'personel-ttl', label: 'Tempat, Tanggal Lahir', value: personel?.ttl ?? '' },
		{ id: 'personel-nrp', label: 'NRP', value: personel?.nrp ?? '' },
		{ id: 'personel-gender', label: 'Jenis Kelamin', value: personel?.jenisKelamin ?? '' },
		{ id: 'personel-pangkat', label: 'Pangkat / Korps', value: personel?.pangkat ?? '' },
		{ id: 'personel-satker', label: 'Satuan Kerja', value: personel?.satker ?? '' },
		{ id: 'personel-jabatan', label: 'Jabatan', value: personel?.jabatan ?? '' },
		{ id: 'personel-email', label: 'Email', value: personel?.email ?? '' }
	]);
</script>

<div class="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
	{#each fields as field (field.id)}
		<AuthField
			id={field.id}
			label={field.label}
			value={field.value}
			readonly
			placeholder="Pilih personel terlebih dahulu"
			inputClass="text-(--dash-muted)"
		/>
	{/each}
</div>
