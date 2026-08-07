<script lang="ts">
	import {
		iconCalendar,
		iconGlobeBook,
		pengajuanStatusPill,
		pengajuanStepCircle,
		pengajuanStepIcon,
		pengajuanStepLine,
		pengajuanStepPanel,
		pengajuanStepTitle
	} from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import type { PengajuanStep } from '$lib/tes-bahasa-data';

	let { steps }: { steps: PengajuanStep[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconGlobeBook} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Status Pengajuan</h2>
	</div>

	<div class="flex flex-col">
		{#each steps as step, i (step.id)}
			<div class="flex gap-3">
				<!-- Kolom rel: lingkaran + garis penghubung ke langkah berikutnya.
				     Warna garis mengikuti status langkah di bawahnya. -->
				<div class="flex flex-col items-center">
					<div
						class="flex size-9 shrink-0 items-center justify-center rounded-full border-2 {pengajuanStepCircle[
							step.status
						]}"
					>
						<MaskIcon src={pengajuanStepIcon[step.id]} class="size-4.5" />
					</div>
					{#if i < steps.length - 1}
						<div class="w-0.5 flex-1 {pengajuanStepLine[steps[i + 1].status]}"></div>
					{/if}
				</div>

				<div class="min-w-0 flex-1 {i < steps.length - 1 ? 'pb-4' : ''}">
					<div class="rounded-[10px] px-3.5 py-3 {pengajuanStepPanel[step.status]}">
						<p class="text-[13px] font-bold {pengajuanStepTitle[step.status]}">
							{step.no}. {step.title}
						</p>
						<p class="mt-1.5 text-[12px] leading-snug text-[#5D5D5D]">{step.desc}</p>
						<div class="mt-2.5 flex flex-wrap items-center justify-between gap-2">
							<Badge
								class="rounded-[8px] border-transparent px-2.5 py-1 text-[12px] font-bold {pengajuanStatusPill[
									step.status
								]}"
							>
								{step.badgeLabel}
							</Badge>
							<span class="flex items-center gap-1.5 text-[11px] text-[#5D5D5D]">
								<MaskIcon src={iconCalendar} class="size-3.5 text-[#777777]" />
								{step.tanggal}
							</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
