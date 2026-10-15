<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import ActivityList from '$lib/components/dashboard/ActivityList.svelte';
	import AnnouncementList from '$lib/components/dashboard/AnnouncementList.svelte';
	import HeroCard from '$lib/components/dashboard/HeroCard.svelte';
	import HistoryTable from '$lib/components/dashboard/HistoryTable.svelte';
	import TableFilters from '$lib/components/shared/TableFilters.svelte';
	import ScheduleCard from '$lib/components/dashboard/ScheduleCard.svelte';
	// import ScoreBars from '$lib/components/dashboard/ScoreBars.svelte';
	import StatCard from '$lib/components/dashboard/StatCard.svelte';
	import * as Card from '$lib/components/ui/card';
	import {
		activities,
		// alcptSections,
		announcements,
		currentUser,
		historyRows,
		schedules,
		stats,
		HISTORY_STATUSES
	} from '$lib/dashboard-data';

	const layananOptions = [...new Set(historyRows.map((r) => r.jenisLayanan))];

	const panel = 'rounded-[10px] border border-(--dash-border) bg-white shadow-none ring-0';
	const panelTitle = 'text-[13.5px] font-bold text-(--dash-text)';
	const seeAll =
		'flex cursor-pointer items-center gap-1 text-[11.5px] font-semibold text-(--accent-blue) hover:text-(--brand-600)';
</script>

<svelte:head><title>Layanan Disdikal — Dashboard</title></svelte:head>

<div class="mx-auto flex max-w-[1880px] flex-col gap-3.5 px-3 sm:px-4 lg:px-5">
	<div
		class="grid grid-cols-1 items-stretch gap-3.5 min-[1100px]:grid-cols-[minmax(0,3.5fr)_minmax(280px,1fr)]"
	>
		<HeroCard user={currentUser} />
		<ScheduleCard items={schedules} />
	</div>

	<div class="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
		{#each stats as stat (stat.id)}
			<StatCard {stat} />
		{/each}
	</div>

	<Card.Root class={panel}>
		<Card.Header>
			<Card.Title class={panelTitle}>Riwayat Pengajuan Terbaru</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-4">
			<TableFilters
				searchPlaceholder="Cari nama pengajuan nomor pengajuan ..."
				statusOptions={HISTORY_STATUSES}
				secondOptions={layananOptions}
				secondLabel="Semua Layanan"
			/>
			<HistoryTable rows={historyRows} />
		</Card.Content>
	</Card.Root>

	<div class="grid grid-cols-1 gap-3.5 md:grid-cols-2">
		<Card.Root class={panel}>
			<Card.Header>
				<Card.Title class={panelTitle}>Aktivitas Pengajuan Saya</Card.Title>
				<Card.Action class={seeAll} aria-disabled="true">
					Lihat Semua <ArrowRightIcon class="size-3" strokeWidth={2.2} />
				</Card.Action>
			</Card.Header>
			<Card.Content><ActivityList items={activities} /></Card.Content>
		</Card.Root>

		<Card.Root class={panel}>
			<Card.Header>
				<Card.Title class={panelTitle}>Pengumuman Resmi Disdikal</Card.Title>
				<Card.Action class={seeAll} aria-disabled="true">
					Lihat Semua <ArrowRightIcon class="size-3" strokeWidth={2.2} />
				</Card.Action>
			</Card.Header>
			<Card.Content><AnnouncementList items={announcements} /></Card.Content>
		</Card.Root>

		<!-- <Card.Root class="{panel} min-[1100px]:col-span-1">
			<Card.Header>
				<Card.Title class={panelTitle}>Skor ALCPT Terakhir</Card.Title>
			</Card.Header>
			<Card.Content><ScoreBars items={alcptSections} /></Card.Content>
		</Card.Root> -->
	</div>
</div>
