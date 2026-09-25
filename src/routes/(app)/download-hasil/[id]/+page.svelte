<script lang="ts">
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import { resolve } from '$app/paths';
	import DokumenTabs from '$lib/components/download-hasil/DokumenTabs.svelte';
	import DataPairs from '$lib/components/shared/DataPairs.svelte';
	import DetailDokumenTable from '$lib/components/shared/DetailDokumenTable.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { downloadDetail } from '$lib/download-hasil-data';

	let { data } = $props();

	const record = $derived(downloadDetail[data.id]);

	let tab = $state('hasil');

	const showHasil = $derived(tab === 'hasil');
	const dokumen = $derived(showHasil ? record.dokumenHasil : record.dokumenPengajuan);
	const dokumenJudul = $derived(showHasil ? 'Daftar Dokumen Hasil' : 'Daftar Dokumen Pengajuan');
	const dokumenSub = $derived(
		showHasil
			? 'Berikut adalah dokumen penetapan pengajuan yang dapat Anda unduh.'
			: 'Berikut adalah dokumen pendukung yang Anda unggah saat mengajukan layanan ini.'
	);

	const cardHeader =
		'flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white';
</script>

<svelte:head><title>Layanan Disdikal — Detail Hasil</title></svelte:head>

<div class="flex flex-col gap-3.5">
	<div class="flex flex-wrap items-center gap-3">
		<Button
			href={resolve('/download-hasil')}
			variant="outline"
			class="h-auto cursor-pointer gap-2 rounded-md border-(--dash-border) bg-white px-4 py-2 text-[12px] font-semibold text-(--accent-blue) hover:bg-(--accent-blue-50) hover:text-(--accent-blue)"
		>
			<ArrowLeftIcon class="size-3.5" strokeWidth={2} />
			Kembali
		</Button>
		<Badge
			class="ml-auto gap-1.5 rounded-md border-transparent bg-(--accent-green-50) px-3 py-1.5 text-[11.5px] font-semibold text-(--accent-green)"
		>
			<CircleCheckIcon class="size-3.5" strokeWidth={2.2} />
			{record.status}
		</Badge>
	</div>

	<div
		class="flex flex-wrap items-center gap-4 rounded-[10px] border border-(--dash-border) bg-white px-5 py-4"
	>
		<span class={cardHeader}>
			<FileTextIcon class="size-4.5" strokeWidth={2} />
		</span>
		<div class="min-w-0 flex-1">
			<h2 class="text-[15px] font-bold text-(--navy-950)">{record.judul}</h2>
			<p class="text-[11px] text-(--dash-muted)">{record.deskripsi}</p>
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

	<div class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
		<div class="mb-4 flex items-center gap-2.5">
			<span class={cardHeader}>
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
								href={resolve('/download-hasil')}
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
		<DokumenTabs
			hasilCount={record.dokumenHasil.length}
			pengajuanCount={record.dokumenPengajuan.length}
			bind:value={tab}
		/>

		<div class="mt-4 mb-4 flex items-center gap-2.5">
			<span class={cardHeader}>
				<FileTextIcon class="size-4.5" strokeWidth={2} />
			</span>
			<div>
				<h3 class="text-[13.5px] font-semibold text-(--dash-text)">{dokumenJudul}</h3>
				<p class="text-[10.5px] text-(--dash-muted)">{dokumenSub}</p>
			</div>
		</div>

		<DetailDokumenTable rows={dokumen} />
	</div>
</div>
