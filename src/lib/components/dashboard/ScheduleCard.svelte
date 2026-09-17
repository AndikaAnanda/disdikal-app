<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import HourglassIcon from '@lucide/svelte/icons/hourglass';
	import type { ScheduleItem } from '$lib/dashboard-data';

	let { items }: { items: ScheduleItem[] } = $props();
</script>

<section
	class="flex h-full flex-col gap-3 rounded-[10px] border border-(--schedule-border) bg-(--schedule-bg) px-4 py-4"
>
	<h2 class="flex items-center gap-2 text-[13px] font-bold text-(--accent-orange)">
		<HourglassIcon class="size-4" strokeWidth={2} />
		Tenggat &amp; Jadwal Saya
	</h2>

	<div class="flex flex-col gap-2.5">
		{#each items as item (item.id)}
			<div
				class="flex items-center gap-3 rounded-lg border border-(--dash-border) bg-white px-3 py-2.5"
			>
				<div
					class="flex w-9 shrink-0 flex-col items-center border-r border-(--dash-border) pr-3 leading-tight"
				>
					<span class="text-[15px] font-bold text-(--accent-orange)">{item.day}</span>
					<span class="text-[10px] text-(--dash-muted)">{item.month}</span>
				</div>
				<div class="min-w-0">
					<p class="text-[11.5px] leading-snug font-semibold text-(--dash-text)">{item.title}</p>
					<p class="mt-0.5 text-[10px] text-(--dash-muted)">{item.detail}</p>
				</div>
			</div>
		{/each}
	</div>

	<span
		class="mt-auto flex cursor-pointer items-center justify-end gap-1 text-[11px] font-bold text-(--accent-orange)"
		aria-disabled="true"
	>
		Lihat Semua Jadwal
		<ArrowRightIcon class="size-3.5" strokeWidth={2.2} />
	</span>
</section>
