<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import AnnouncementCard from '$lib/components/dashboard/AnnouncementCard.svelte';
	import DeadlineCard from '$lib/components/dashboard/DeadlineCard.svelte';
	import DownloadPanel from '$lib/components/dashboard/DownloadPanel.svelte';
	import HeroCard from '$lib/components/dashboard/HeroCard.svelte';
	import HistoryTable from '$lib/components/dashboard/HistoryTable.svelte';
	import InfoListPanel from '$lib/components/dashboard/InfoListPanel.svelte';
	import ScoreRadarPanel from '$lib/components/dashboard/ScoreRadarPanel.svelte';
	import StatCard from '$lib/components/dashboard/StatCard.svelte';
	import TimelinePanel from '$lib/components/dashboard/TimelinePanel.svelte';
	import TrackingPanel from '$lib/components/dashboard/TrackingPanel.svelte';
	import * as Card from '$lib/components/ui/card';
	import {
		alcptScores,
		alcptSummary,
		announcement,
		currentUser,
		downloadItems,
		historyRows,
		infoItems,
		stats,
		timelineGroups,
		trackingSteps,
		uploadDeadline
	} from '$lib/dashboard-data';

	const panel = 'mb-4.5 rounded-[14px] border border-(--dash-border) bg-white shadow-none ring-0';
	const panelTitle = 'font-bold text-black text-[14px]';
	const seeAll =
		'flex items-center gap-1 text-[12.5px] font-bold text-[#007CF0] hover:text-[#2457b3] cursor-pointer';
</script>

<svelte:head><title>Layanan Disdikal — Dashboard</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-5">
	<div class="mb-4.5 grid gap-4.5 max-[1100px]:grid-cols-1 min-[1101px]:grid-cols-[2.9fr_1fr_1fr]">
		<HeroCard user={currentUser} />
		<AnnouncementCard {announcement} />
		<DeadlineCard deadline={uploadDeadline} />
	</div>

	<div
		class="grid items-stretch gap-4.5 max-[1300px]:grid-cols-1 min-[1301px]:grid-cols-[3.2fr_1fr]"
	>
		<div class="@container flex flex-col">
			<div class="mb-4.5 grid gap-4 @max-[1100px]:grid-cols-2 @min-[1101px]:grid-cols-5">
				{#each stats as stat (stat.id)}
					<StatCard {stat} />
				{/each}
			</div>

			<div
				class="grid flex-1 items-stretch gap-4.5 @max-[900px]:grid-cols-1 @min-[901px]:grid-cols-[2.2fr_1fr]"
			>
				<div class="flex flex-col">
					<Card.Root class="{panel} flex-1">
						<Card.Header>
							<Card.Title class={panelTitle}>Tracking Pengajuan (Active)</Card.Title>
						</Card.Header>
						<Card.Content class="flex flex-col gap-8">
							<TrackingPanel steps={trackingSteps} />
							<div>
								<h3 class="mt-6 mb-4 text-base font-bold {panelTitle}">
									Riwayat Pengajuan Terakhir
								</h3>
								<HistoryTable rows={historyRows} />
							</div>
						</Card.Content>
					</Card.Root>
				</div>

				<div class="flex flex-col">
					<Card.Root class={panel}>
						<Card.Header>
							<Card.Title class={panelTitle}>TIMELINE AKTIVITAS</Card.Title>
							<Card.Action class={seeAll} aria-disabled="true">
								Lihat Semua <ArrowRightIcon class="size-3" />
							</Card.Action>
						</Card.Header>
						<Card.Content><TimelinePanel groups={timelineGroups} /></Card.Content>
					</Card.Root>

					<Card.Root class="{panel} flex-1">
						<Card.Header>
							<Card.Title class={panelTitle}>INFORMASI &amp; PENGUMUMAN</Card.Title>
							<Card.Action class={seeAll} aria-disabled="true">
								Lihat Semua <ArrowRightIcon class="size-3" />
							</Card.Action>
						</Card.Header>
						<Card.Content><InfoListPanel items={infoItems} /></Card.Content>
					</Card.Root>
				</div>
			</div>
		</div>

		<div class="flex flex-col">
			<Card.Root class={panel}>
				<Card.Header>
					<Card.Title class={panelTitle}>ANALISIS SKOR ALCPT</Card.Title>
				</Card.Header>
				<Card.Content class="-mt-7">
					<ScoreRadarPanel scores={alcptScores} summary={alcptSummary} />
				</Card.Content>
			</Card.Root>

			<Card.Root class="{panel} flex-1">
				<Card.Header>
					<Card.Title class={panelTitle}>DOWNLOAD HASIL (PDF)</Card.Title>
					<Card.Action class={seeAll} aria-disabled="true">
						Lihat Semua <ArrowRightIcon class="size-3" />
					</Card.Action>
				</Card.Header>
				<Card.Content><DownloadPanel items={downloadItems} /></Card.Content>
			</Card.Root>
		</div>
	</div>
</div>
