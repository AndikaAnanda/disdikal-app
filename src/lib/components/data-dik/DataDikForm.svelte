<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import SendIcon from '@lucide/svelte/icons/send';
	import type { SuperForm } from 'sveltekit-superforms';
	import DataPendidikanSection from './DataPendidikanSection.svelte';
	import DataPersonelSection from './DataPersonelSection.svelte';
	import DokumenSection from './DokumenSection.svelte';
	import PersonelSearch from './PersonelSearch.svelte';
	import SectionCard from '$lib/components/shared/SectionCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { personelRecords } from '$lib/data-dik-data';
	import type { DataDikInput } from '$lib/schemas/data-dik';

	let { superform }: { superform: SuperForm<DataDikInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	const personel = $derived(personelRecords.find((p) => p.id === $form.personelId));

	const draft =
		'h-auto cursor-pointer gap-2 rounded-md border-(--dash-border) bg-white px-4 py-2.5 text-[12px] font-semibold text-(--dash-muted) hover:bg-(--brand-50) hover:text-(--navy-950)';
	const submit =
		'h-auto cursor-pointer gap-2 rounded-md bg-(--navy-950) px-4 py-2.5 text-[12px] font-semibold text-white hover:bg-(--brand-600)';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-wrap items-center gap-3">
		<span
			class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
		>
			<FileTextIcon class="size-4.5" strokeWidth={2} />
		</span>
		<div class="min-w-0 flex-1">
			<h2 class="text-[14px] font-bold text-(--navy-950)">Cari dan Pilih Data Personel</h2>
			<p class="text-[11px] text-(--dash-muted)">
				Masukkan NRP atau nama personel untuk menampilkan data. Pilih personel dari hasil pencarian
			</p>
		</div>
	</div>

	<PersonelSearch bind:value={$form.personelId} error={$errors.personelId?.[0]} />

	<SectionCard number={1} title="Data Personel">
		<DataPersonelSection {personel} />
	</SectionCard>

	<SectionCard number={2} title="Data Pendidikan">
		<DataPendidikanSection {superform} />
	</SectionCard>

	<SectionCard number={3} title="Unggah Dokumen">
		<DokumenSection {superform} />
	</SectionCard>

	<div class="flex flex-wrap items-center justify-end gap-2.5">
		<Button type="button" variant="outline" aria-disabled="true" class={draft}>Simpan Draf</Button>
		<Button type="submit" class={submit}>
			Kirim Pengajuan
			<SendIcon class="size-3.5" strokeWidth={2} />
		</Button>
	</div>
</div>
