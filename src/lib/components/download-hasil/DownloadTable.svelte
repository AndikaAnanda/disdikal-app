<script lang="ts">
	import DownloadIcon from '@lucide/svelte/icons/download';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import { resolve } from '$app/paths';
	import { layananIcon } from '$lib/components/pengajuan/assets';
	import DataTable, { tableCell } from '$lib/components/shared/DataTable.svelte';
	import StatusBadge from '$lib/components/shared/StatusBadge.svelte';
	import type { DownloadRow } from '$lib/download-hasil-data';
	import { layananItems } from '$lib/pengajuan-data';

	let { rows }: { rows: DownloadRow[] } = $props();

	const headers = [
		'No',
		'Jenis Layanan',
		'Nomor Pengajuan',
		'Nama Pengajuan',
		'Tanggal Pengajuan',
		'Tanggal Terbit',
		'Jumlah Dokumen',
		'Status',
		'Aksi'
	];

	const label = (id: DownloadRow['layanan']) =>
		layananItems.find((item) => item.id === id)?.menuLabel ?? id;

	const action =
		'inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-(--navy-950) bg-white px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-(--navy-950) hover:bg-(--brand-50)';
</script>

<DataTable {headers} {rows} minWidth="min-w-280">
	{#snippet row(item: DownloadRow)}
		<td class={tableCell}>{item.no}.</td>
		<td class="{tableCell} whitespace-nowrap">
			<span class="flex items-center gap-2">
				<img src={layananIcon[item.layanan]} alt="" class="size-4 shrink-0" />
				{label(item.layanan)}
			</span>
		</td>
		<td class="{tableCell} whitespace-nowrap">{item.nomor}</td>
		<td class={tableCell}>{item.nama}</td>
		<td class="{tableCell} whitespace-nowrap">{item.tanggalPengajuan}</td>
		<td class="{tableCell} whitespace-nowrap">{item.tanggalTerbit}</td>
		<td class="{tableCell} whitespace-nowrap">
			<span class="flex items-center gap-2">
				<FileTextIcon class="size-4 shrink-0 text-(--accent-blue)" strokeWidth={2} />
				{item.jumlahDokumen} Dokumen
			</span>
		</td>
		<td class={tableCell}>
			<StatusBadge status={item.status} />
		</td>
		<td class={tableCell}>
			<span class="flex items-center gap-2">
				<a href={resolve('/(app)/download-hasil/[id]', { id: item.id })} class={action}>
					Lihat
					<EyeIcon class="size-3.5" strokeWidth={2} />
				</a>
				<span class={action} aria-disabled="true">
					All File
					<DownloadIcon class="size-3.5" strokeWidth={2} />
				</span>
			</span>
		</td>
	{/snippet}
</DataTable>
