<script lang="ts">
	import DataTable, { tableCell } from '$lib/components/shared/DataTable.svelte';
	import StatusBadge from '$lib/components/shared/StatusBadge.svelte';
	import type { RiwayatDikRow } from '$lib/data-dik-data';

	let { rows }: { rows: RiwayatDikRow[] } = $props();

	const headers = [
		'No',
		'Jenis Pengajuan',
		'Jenjang Pendidikan',
		'Nama Gelar',
		'Perguruan Tinggi',
		'Tahun Lulus',
		'Tanggal Pengajuan',
		'Status',
		'Aksi'
	];
</script>

<DataTable {headers} {rows} tone="light" minWidth="min-w-230">
	{#snippet row(item: RiwayatDikRow)}
		<td class={tableCell}>{item.no}.</td>
		<td class="{tableCell} whitespace-nowrap">{item.jenisPengajuan}</td>
		<td class="{tableCell} whitespace-nowrap">{item.jenjang}</td>
		<td class={tableCell}>{item.namaGelar}</td>
		<td class={tableCell}>{item.perguruanTinggi}</td>
		<td class={tableCell}>{item.tahunLulus}</td>
		<td class="{tableCell} whitespace-nowrap">
			<span class="block">{item.tanggal}</span>
			<span class="block text-[10px] text-(--dash-muted)">{item.jam}</span>
		</td>
		<td class={tableCell}>
			<StatusBadge status={item.status} />
		</td>
		<td class={tableCell}>
			<span
				aria-disabled="true"
				class="inline-flex cursor-pointer items-center rounded-md border border-(--accent-blue) bg-white px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-(--accent-blue) hover:bg-(--accent-blue-50)"
			>
				Lihat Detail
			</span>
		</td>
	{/snippet}
</DataTable>
