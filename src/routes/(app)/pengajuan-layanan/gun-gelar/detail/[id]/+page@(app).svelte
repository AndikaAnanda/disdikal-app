<script lang="ts">
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import { resolve } from '$app/paths';
	import DataPairs from '$lib/components/gun-gelar/DataPairs.svelte';
	import DetailDokumenTable from '$lib/components/gun-gelar/DetailDokumenTable.svelte';
	import DetailProgress from '$lib/components/gun-gelar/DetailProgress.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { detailPengajuan } from '$lib/gun-gelar-data';

	let { data } = $props();

	const record = $derived(detailPengajuan[data.id]);
	const approved = $derived(record.status === 'Disetujui');
	const heading = $derived(approved ? 'Hasil Pengajuan' : 'Detail Pengajuan Gun Gelar');
</script>

<svelte:head><title>Layanan Disdikal — Detail Pengajuan</title></svelte:head>

<div class="mx-auto flex max-w-[1880px] flex-col gap-3.5 px-3 sm:px-4 lg:px-5">
	<div class="flex flex-wrap items-center gap-3">
		<Button
			href={resolve('/pengajuan-layanan/gun-gelar/riwayat')}
			variant="outline"
			class="h-auto cursor-pointer gap-2 rounded-md border-(--dash-border) bg-white px-4 py-2 text-[12px] font-semibold text-(--navy-950) hover:bg-(--brand-50) hover:text-(--navy-950)"
		>
			<ArrowLeftIcon class="size-3.5" strokeWidth={2} />
			Kembali
		</Button>
		<Badge
			class="ml-auto gap-1.5 rounded-md border-transparent px-3 py-1.5 text-[11.5px] font-semibold {approved
				? 'bg-(--accent-green-50) text-(--accent-green)'
				: 'bg-(--accent-orange-50) text-(--accent-orange)'}"
		>
			{#if approved}
				<CircleCheckIcon class="size-3.5" strokeWidth={2.2} />
			{:else}
				<ClockIcon class="size-3.5" strokeWidth={2.2} />
			{/if}
			{record.status}
		</Badge>
	</div>

	<div
		class="flex flex-wrap items-center gap-4 rounded-[10px] border border-(--dash-border) bg-white px-5 py-4"
	>
		<span
			class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
		>
			<GraduationCapIcon class="size-4.5" strokeWidth={2} />
		</span>
		<div class="min-w-0 flex-1">
			<h2 class="text-[15px] font-bold text-(--navy-950)">{heading}</h2>
			<p class="text-[11px] text-(--dash-muted)">
				Berikut ini adalah informasi detail pengajuan penetapan/penggunaan gelar akademik yang Anda
				ajukan.
			</p>
		</div>
		<div class="flex flex-wrap items-center gap-6 sm:ml-auto">
			<div>
				<p class="text-[10.5px] text-(--dash-muted)">Nomor Pengajuan</p>
				<p class="text-[11.5px] font-semibold text-(--navy-950)">{record.nomor}</p>
			</div>
			<div class="border-l border-(--dash-border) pl-6">
				<p class="text-[10.5px] text-(--dash-muted)">Tanggal Pengajuan</p>
				<p class="text-[11.5px] font-semibold text-(--navy-950)">{record.tanggal}</p>
			</div>
		</div>
	</div>

	<DetailProgress steps={record.steps} currentStep={record.currentStep} />

	<div class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
		<div class="mb-4 flex items-center gap-2.5">
			<span
				class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
			>
				<FileTextIcon class="size-4.5" strokeWidth={2} />
			</span>
			<div>
				<h3 class="text-[13.5px] font-semibold text-(--dash-text)">Data Pengajuan</h3>
				<p class="text-[10.5px] text-(--dash-muted)">Informasi data yang Anda ajukan</p>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-x-10 gap-y-2.5 md:grid-cols-2">
			<DataPairs items={record.dataKiri} labelWidth="w-36" />
			<div class="md:border-l md:border-(--dash-border) md:pl-8">
				<DataPairs items={record.dataKanan} labelWidth="w-36">
					{#snippet trailing(item)}
						{#if record.withDownload && item.label === 'Keterangan'}
							<a
								href={resolve('/')}
								class="cursor-pointer font-semibold text-(--accent-blue) underline"
							>
								Download Hasil
							</a>
						{/if}
					{/snippet}
				</DataPairs>
			</div>
		</div>
	</div>

	<div class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
		<div class="mb-4 flex items-center gap-2.5">
			<span
				class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
			>
				<FileTextIcon class="size-4.5" strokeWidth={2} />
			</span>
			<div>
				<h3 class="text-[13.5px] font-semibold text-(--dash-text)">Dokumen yang Diajukan</h3>
				<p class="text-[10.5px] text-(--dash-muted)">
					Daftar dokumen pendukung yang telah Anda unggah
				</p>
			</div>
		</div>
		<DetailDokumenTable rows={record.dokumen} />
	</div>
</div>
