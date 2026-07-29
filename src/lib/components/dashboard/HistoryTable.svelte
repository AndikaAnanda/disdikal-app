<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import type { HistoryRow, HistoryStatus } from '$lib/dashboard-data';

	let { rows }: { rows: HistoryRow[] } = $props();

	const statusBadge: Record<HistoryStatus, string> = {
		Selesai: 'bg-(--accent-green-50) text-(--accent-green)',
		Validasi: 'bg-(--brand-50) text-(--brand-600)'
	};

	const headers = [
		'No',
		'Jenis Layanan',
		'Tanggal Pengajuan',
		'Status',
		'Keterangan',
		'Berkas (Unggah/Perbaiki)'
	];

	const cell = 'border-b border-(--dash-border) px-3.5 py-3';
</script>

<div class="overflow-x-auto">
	<!-- min-w menjaga kolom tetap terbaca: tanpa itu browser memampatkan sel jadi
	     satu kata per baris alih-alih memunculkan scrollbar. -->
	<table class="w-full min-w-170 border-collapse text-[12.5px]">
		<thead>
			<tr class="bg-(--navy-900) text-white">
				{#each headers as header (header)}
					<th
						class="px-3.5 py-2.5 text-left text-xs font-semibold whitespace-nowrap first:rounded-l-lg last:rounded-r-lg"
					>
						{header}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row (row.no)}
				<tr class="last:[&>td]:border-b-0">
					<td class="{cell} text-[#33394a]">{row.no}</td>
					<td class="{cell} text-[#33394a]">{row.jenisLayanan}</td>
					<td class="{cell} text-[#33394a]">{row.tanggal}</td>
					<td class={cell}>
						<Badge class="border-transparent font-bold {statusBadge[row.status]}">
							{row.status}
						</Badge>
					</td>
					<td class="{cell} text-[#33394a]">{row.keterangan}</td>
					<td class={cell}>
						<Badge
							variant="outline"
							class={row.berkasAction
								? 'border-(--brand-500) text-(--brand-600)'
								: 'border-(--accent-green) text-(--accent-green)'}
						>
							{row.berkas}
						</Badge>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
