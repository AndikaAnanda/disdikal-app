<script lang="ts">
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconPieChart, statusIcon, statusIconColor } from './icons';
	import CompletionRing from '$lib/components/shared/CompletionRing.svelte';
	import type { Statistik } from '$lib/dokumen-data';

	let { data }: { data: Statistik } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconPieChart} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Statistik Dokumen &amp; Validasi</h2>
	</div>

	<div class="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
		<!-- Lubang ring di CompletionRing di-hardcode navy, jadi di-override putih. -->
		<CompletionRing
			percent={data.percent}
			fill="#52D452"
			track="#EBEBEB"
			class="size-30 shrink-0"
			innerClass="size-23 gap-0.5 bg-white"
		>
			<span class="text-[20px] leading-none font-bold text-(--brand-600)">{data.percent}%</span>
			<span class="text-[11px] text-[#007CF0]">Lengkap</span>
		</CompletionRing>

		<div class="min-w-0 flex-1">
			<p class="text-[14px] font-bold text-[#343434]">{data.lengkapLabel}</p>
			<p class="mt-1.5 text-[12px] text-[#777777]">{data.sisa}</p>

			<div class="mt-4 grid grid-cols-1 gap-x-4 gap-y-2.5 min-[420px]:grid-cols-2">
				{#each data.legend as item (item.id)}
					<div class="flex items-center gap-2">
						<MaskIcon src={statusIcon[item.status]} class="size-4 {statusIconColor[item.status]}" />
						<span class="text-[12px] text-[#343434]">{item.label} ({item.count})</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
