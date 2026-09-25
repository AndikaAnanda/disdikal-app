<script lang="ts">
	import DownloadIcon from '@lucide/svelte/icons/download';
	import FileDownIcon from '@lucide/svelte/icons/file-down';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import FilesIcon from '@lucide/svelte/icons/files';
	import StatTiles, { type StatTile } from '$lib/components/shared/StatTiles.svelte';
	import { downloadHasilHeader, TOTAL_UNDUHAN, type DownloadRow } from '$lib/download-hasil-data';

	let { rows }: { rows: DownloadRow[] } = $props();

	const items = $derived<StatTile[]>([
		{
			id: 'tersedia',
			label: 'Total Hasil Tersedia',
			value: rows.length,
			sub: 'Pengajuan',
			icon: FileTextIcon,
			tone: 'blue'
		},
		{
			id: 'siap',
			label: 'Siap Unduh',
			value: rows.filter((r) => r.status === 'Tersedia').length,
			sub: 'Pengajuan',
			icon: FileDownIcon,
			tone: 'green'
		},
		{
			id: 'dokumen',
			label: 'Total Dokumen',
			value: rows.reduce((total, r) => total + r.jumlahDokumen, 0),
			sub: 'File Dokumen',
			icon: FilesIcon,
			tone: 'orange'
		},
		{
			id: 'unduhan',
			label: 'Total Unduhan',
			value: TOTAL_UNDUHAN,
			sub: 'Kali diunduh',
			icon: DownloadIcon,
			tone: 'purple'
		}
	]);
</script>

<section
	class="flex flex-wrap items-center gap-4 rounded-[10px] border border-(--dash-border) bg-white px-5 py-4"
>
	<span
		class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
	>
		<DownloadIcon class="size-5.5" strokeWidth={2} />
	</span>
	<div class="min-w-0 flex-1">
		<h2 class="text-[15px] font-bold text-(--navy-950)">{downloadHasilHeader.title}</h2>
		<p class="mt-0.5 text-[11px] text-(--dash-muted)">{downloadHasilHeader.description}</p>
	</div>

	<StatTiles {items} class="w-full gap-2.5 sm:w-auto sm:grid-cols-2 xl:ml-auto xl:grid-cols-4" />
</section>
