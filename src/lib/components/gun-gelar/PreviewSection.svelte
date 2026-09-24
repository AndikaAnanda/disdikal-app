<script lang="ts">
	import EyeIcon from '@lucide/svelte/icons/eye';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import type { SuperForm } from 'sveltekit-superforms';
	import DataPairs from './DataPairs.svelte';
	import SectionCard from '$lib/components/shared/SectionCard.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { formatBytes } from '$lib/utils';
	import { PERNYATAAN_INTRO, PERNYATAAN_TEKS, dokumenWajib } from '$lib/gun-gelar-data';
	import type { GunGelarInput } from '$lib/schemas/gun-gelar';

	let { superform }: { superform: SuperForm<GunGelarInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	const dash = (value: string) => value || '-';

	const pairs = $derived([
		{ label: 'Jenis Pengajuan', value: dash($form.jenisPengajuan) },
		{ label: 'Jenjang Pendidikan', value: dash($form.jenjangPendidikan) },
		{ label: 'Program Studi', value: dash($form.programStudi) },
		{ label: 'Nama Gelar', value: dash($form.namaGelar) },
		{ label: 'Nama Perguruan Tinggi', value: dash($form.namaPerguruanTinggi) },
		{ label: 'Nomor Ijazah', value: dash($form.nomorIjazah) },
		{ label: 'Tahun Masuk', value: dash($form.tahunMasuk) },
		{ label: 'Tanggal Lulus', value: dash($form.tanggalLulus) }
	]);

	const dokumen = $derived([
		...dokumenWajib.map((doc) => ({
			id: doc.field,
			title: doc.title,
			hint: doc.hint,
			file: $form[doc.field]
		})),
		{
			id: 'dokumenLainnya',
			title: $form.dokumenLainnyaNama || 'Dokumen Lainnya',
			hint: 'Dokumen Tambahan',
			file: $form.dokumenLainnya
		},
		...$form.dokumenTambahan.map((entry, index) => ({
			id: `tambahan-${index}`,
			title: entry.nama || 'Dokumen Lainnya',
			hint: 'Dokumen Tambahan',
			file: entry.file
		}))
	]);
</script>

<div class="flex flex-col gap-4">
	<SectionCard number={1} title="Data Gelar yang Diajukan">
		<DataPairs items={pairs} class="sm:grid-cols-2" />
	</SectionCard>

	<SectionCard number={2} title="Dokumen Pendukung">
		<div class="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
			{#each dokumen as doc (doc.id)}
				<div class="rounded-[10px] border border-(--dash-border) bg-white p-3.5">
					<p class="text-[12px] font-semibold text-(--dash-text)">{doc.title}</p>
					<p class="mt-0.5 text-[10px] text-(--dash-muted)">{doc.hint}</p>
					<div
						class="mt-3 flex flex-wrap items-center gap-3 rounded-md border-[1.5px] border-dashed border-(--accent-blue)/40 bg-[#fbfdff] px-3 py-2.5"
					>
						<FileTextIcon class="size-5 shrink-0 text-(--accent-red)" strokeWidth={2} />
						<div class="min-w-0 flex-1">
							<p class="truncate text-[11px] font-semibold text-(--dash-text)">
								{doc.file instanceof File ? doc.file.name : 'Belum ada berkas'}
							</p>
							<p class="text-[9.5px] text-(--dash-muted)">
								{doc.file instanceof File ? formatBytes(doc.file.size) : '-'}
							</p>
						</div>
						<span
							class="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-(--accent-blue)/40 bg-white px-3 py-1.5 text-[10.5px] font-semibold text-(--accent-blue)"
							aria-disabled="true"
						>
							<EyeIcon class="size-3.5" strokeWidth={2} />
							Lihat
						</span>
					</div>
				</div>
			{/each}
		</div>
	</SectionCard>

	<div class="overflow-hidden rounded-[10px] border border-(--dash-border)">
		<div class="flex items-center gap-2.5 bg-(--accent-blue-50) px-4 py-3">
			<span
				class="flex size-5 shrink-0 items-center justify-center rounded-full bg-(--accent-blue) text-white"
			>
				<FileTextIcon class="size-3" strokeWidth={2.2} />
			</span>
			<div class="min-w-0">
				<p class="text-[12.5px] font-semibold text-(--navy-950)">Pernyataan</p>
				<p class="text-[10px] text-(--dash-muted)">{PERNYATAAN_INTRO}</p>
			</div>
		</div>
		<div class="bg-white px-4 py-4">
			<label
				class="flex cursor-pointer items-start gap-3 rounded-md border border-(--accent-blue)/30 bg-(--accent-blue-50)/50 px-4 py-3"
			>
				<Checkbox
					bind:checked={$form.pernyataan}
					class="mt-0.5 size-4 shrink-0 rounded-[4px] border-(--accent-blue)/50 bg-white shadow-none data-checked:border-(--accent-blue) data-checked:bg-(--accent-blue) data-checked:text-white [&_svg]:size-3!"
				/>
				<span class="text-[10.5px] leading-[1.7] text-(--dash-text)">{PERNYATAAN_TEKS}</span>
			</label>
			{#if $errors.pernyataan}
				<p class="mt-1.5 text-xs text-destructive">{$errors.pernyataan}</p>
			{/if}
		</div>
	</div>
</div>
