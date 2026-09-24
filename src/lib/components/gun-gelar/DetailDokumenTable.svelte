<script lang="ts">
	import EyeIcon from '@lucide/svelte/icons/eye';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import DataTable, { tableCell } from '$lib/components/shared/DataTable.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import type { DetailDokumen, DetailDokumenStatus } from '$lib/gun-gelar-data';

	let { rows }: { rows: DetailDokumen[] } = $props();

	const statusBadge: Record<DetailDokumenStatus, string> = {
		'Dalam Pemeriksaan': 'bg-(--accent-orange-50) text-(--accent-orange)',
		Terverifikasi: 'bg-(--accent-green-50) text-(--accent-green)'
	};

	const headers = ['No', 'Nama Dokumen', 'Keterangan', 'File', 'Tanggal Upload', 'Status', 'Aksi'];
</script>

<DataTable {headers} {rows} minWidth="min-w-230">
	{#snippet row(item: DetailDokumen)}
		<td class={tableCell}>{item.no}.</td>
		<td class={tableCell}>{item.nama}</td>
		<td class={tableCell}>{item.keterangan}</td>
		<td class={tableCell}>
			<span class="flex items-start gap-2">
				<FileTextIcon class="mt-0.5 size-4 shrink-0 text-(--accent-red)" strokeWidth={2} />
				<span class="min-w-0">
					<span class="block truncate font-medium">{item.fileName}</span>
					<span class="block text-[10px] text-(--dash-muted)">{item.fileSize}</span>
				</span>
			</span>
		</td>
		<td class="{tableCell} whitespace-nowrap">
			<span class="block">{item.tanggal}</span>
			<span class="block text-[10px] text-(--dash-muted)">{item.jam}</span>
		</td>
		<td class={tableCell}>
			<Badge
				class="rounded-md border-transparent px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap {statusBadge[
					item.status
				]}"
			>
				{item.status}
			</Badge>
		</td>
		<td class={tableCell}>
			<span
				class="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-(--navy-950) bg-white px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-(--navy-950) hover:bg-(--brand-50)"
				aria-disabled="true"
			>
				Lihat File
				<EyeIcon class="size-3.5" strokeWidth={2} />
			</span>
		</td>
	{/snippet}
</DataTable>
