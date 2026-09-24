<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import RiwayatTable from '$lib/components/gun-gelar/RiwayatTable.svelte';
	import RiwayatStats from '$lib/components/shared/RiwayatStats.svelte';
	import TableFilters from '$lib/components/shared/TableFilters.svelte';
	import { riwayatRows } from '$lib/gun-gelar-data';
	import { RIWAYAT_STATUSES } from '$lib/pengajuan-shared';
</script>

<svelte:head><title>Layanan Disdikal — Riwayat Gun Gelar</title></svelte:head>

<div class="flex flex-col gap-4">
	<div class="flex flex-wrap items-center gap-3">
		<span
			class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
		>
			<FileTextIcon class="size-4.5" strokeWidth={2} />
		</span>
		<div class="min-w-0 flex-1">
			<h2 class="text-[14px] font-bold text-(--navy-950)">Riwayat Pengajuan Gun Gelar</h2>
			<p class="text-[11px] text-(--dash-muted)">
				Daftar pengajuan penetapan atau penggunaan gelar akademik yang pernah Anda ajukan.
			</p>
		</div>
	</div>

	<RiwayatStats rows={riwayatRows} />

	<TableFilters searchPlaceholder="Cari nama pengajuan ..." statusOptions={RIWAYAT_STATUSES} />

	<RiwayatTable rows={riwayatRows} />
</div>
