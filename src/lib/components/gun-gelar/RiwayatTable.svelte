<script lang="ts">
	import EyeIcon from '@lucide/svelte/icons/eye';
	import { resolve } from '$app/paths';
	import DataTable, { tableCell } from '$lib/components/shared/DataTable.svelte';
	import StatusBadge from '$lib/components/shared/StatusBadge.svelte';
	import type { RiwayatRow } from '$lib/gun-gelar-data';

	let { rows }: { rows: RiwayatRow[] } = $props();

	const headers = [
		'No',
		'Jenis Pengajuan',
		'Jenjang Pendidikan',
		'Program Studi',
		'Nama Gelar',
		'Perguruan Tinggi',
		'Tanggal Pengajuan',
		'Status',
		'Aksi'
	];
</script>

<DataTable {headers} {rows}>
	{#snippet row(item: RiwayatRow)}
		<td class={tableCell}>{item.no}.</td>
		<td class="{tableCell} whitespace-nowrap">{item.jenisPengajuan}</td>
		<td class="{tableCell} whitespace-nowrap">{item.jenjang}</td>
		<td class={tableCell}>{item.programStudi}</td>
		<td class="{tableCell} whitespace-nowrap">{item.namaGelar}</td>
		<td class={tableCell}>{item.perguruanTinggi}</td>
		<td class="{tableCell} whitespace-nowrap">
			<span class="block">{item.tanggal}</span>
			<span class="block text-[10px] text-(--dash-muted)">{item.jam}</span>
		</td>
		<td class={tableCell}>
			<StatusBadge status={item.status} />
		</td>
		<td class={tableCell}>
			<a
				href={resolve('/(app)/pengajuan-layanan/gun-gelar/detail/[id]', { id: item.id })}
				class="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-(--navy-950) bg-white px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-(--navy-950) hover:bg-(--brand-50)"
			>
				Lihat Detail
				<EyeIcon class="size-3.5" strokeWidth={2} />
			</a>
		</td>
	{/snippet}
</DataTable>
