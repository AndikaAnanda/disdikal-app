<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import RiwayatTable from '$lib/components/data-dik/RiwayatTable.svelte';
	import RiwayatStats from '$lib/components/shared/RiwayatStats.svelte';
	import TableFilters from '$lib/components/shared/TableFilters.svelte';
	import { riwayatDikRows } from '$lib/data-dik-data';
	import { RIWAYAT_STATUSES } from '$lib/pengajuan-shared';
</script>

<svelte:head><title>Layanan Disdikal — Riwayat Update Data Dik</title></svelte:head>

<div class="flex flex-col gap-4">
	<div class="flex flex-wrap items-center gap-3">
		<span
			class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
		>
			<FileTextIcon class="size-4.5" strokeWidth={2} />
		</span>
		<div class="min-w-0 flex-1">
			<h2 class="text-[14px] font-bold text-(--navy-950)">Riwayat Pengajuan Update Data Dik</h2>
			<p class="text-[11px] text-(--dash-muted)">
				Daftar pengajuan pembaharui data pendidikan yang pernah Anda ajukan.
			</p>
		</div>
	</div>

	<RiwayatStats rows={riwayatDikRows} />

	<TableFilters
		searchPlaceholder="Cari dokumen ..."
		statusOptions={RIWAYAT_STATUSES}
		withDate={false}
		withActions={false}
	/>

	<RiwayatTable rows={riwayatDikRows} />
</div>
