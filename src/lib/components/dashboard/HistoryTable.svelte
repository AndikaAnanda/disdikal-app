<script lang="ts">
	import EyeIcon from '@lucide/svelte/icons/eye';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import type { HistoryRow, HistoryStatus } from '$lib/dashboard-data';

	let { rows }: { rows: HistoryRow[] } = $props();

	const statusBadge: Record<HistoryStatus, string> = {
		'Sedang Diproses': 'bg-(--accent-blue-50) text-(--accent-blue)',
		'Menunggu Verifikasi': 'bg-(--accent-purple-50) text-(--accent-purple)',
		Disetujui: 'bg-(--accent-green-50) text-(--accent-green)',
		Ditolak: 'bg-(--accent-red-50) text-(--accent-red)',
		'Perlu Revisi': 'bg-(--accent-orange-50) text-(--accent-orange)'
	};

	const headers = [
		'No',
		'No Pengajuan',
		'Jenis Layanan',
		'Tanggal Pengajuan',
		'Status',
		'Keterangan',
		'Verifikator',
		'Tanggal Update',
		'Aksi'
	];

	const cell = 'border-b border-(--dash-border) px-3 py-3 align-middle text-(--dash-text)';
</script>

<div class="overflow-x-auto">
	<table class="w-full min-w-240 border-collapse text-[11.5px]">
		<thead>
			<tr class="bg-(--navy-950) text-white">
				{#each headers as header (header)}
					<th
						class="px-3 py-3 text-left text-[11.5px] font-semibold whitespace-nowrap first:rounded-l-md last:rounded-r-md"
					>
						{header}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row (row.no)}
				<tr class="last:[&>td]:border-b-0">
					<td class={cell}>{row.no}.</td>
					<td class="{cell} whitespace-nowrap">{row.noPengajuan}</td>
					<td class={cell}>{row.jenisLayanan}</td>
					<td class="{cell} whitespace-nowrap">{row.tanggal}</td>
					<td class={cell}>
						<Badge
							class="rounded-md border-transparent px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap {statusBadge[
								row.status
							]}"
						>
							{row.status}
						</Badge>
					</td>
					<td class={cell}>{row.keterangan}</td>
					<td class="{cell} whitespace-nowrap">{row.verifikator}</td>
					<td class="{cell} whitespace-nowrap">
						<span class="block">{row.updateDate}</span>
						<span class="block text-[10px] text-(--dash-muted)">{row.updateTime}</span>
					</td>
					<td class={cell}>
						<Button
							type="button"
							variant="outline"
							aria-disabled="true"
							class="h-auto cursor-pointer gap-1.5 rounded-md border-(--navy-950) bg-white px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap text-(--navy-950) hover:bg-(--brand-50) hover:text-(--navy-950)"
						>
							Lihat Detail
							<EyeIcon class="size-3.5" strokeWidth={2} />
						</Button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
