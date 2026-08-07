<script lang="ts">
	import { iconExamOutline, iconLock, iconTimeLine } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { TestSection, TestSectionId } from '$lib/tes-bahasa-data';

	let { sections, activeId }: { sections: TestSection[]; activeId: TestSectionId } = $props();
</script>

<div class="rounded-[8px] bg-white p-6">
	<div class="mb-4.5 flex items-center gap-3">
		<MaskIcon src={iconExamOutline} class="size-5 text-[#01296E]" />
		<h2 class="text-[16px] font-bold text-[#01296E]">Daftar Bagian Tes</h2>
	</div>

	<div class="flex flex-col gap-3">
		{#each sections as section (section.id)}
			{@const active = section.id === activeId}
			<!-- Bagian selain yang sedang dikerjakan masih terkunci. -->
			<div
				class="flex items-center justify-between gap-4.5 rounded-[8px] border-[0.5px] px-4.5 py-3 {active
					? 'border-[#E6F2FE] bg-[#F7F9FE]'
					: 'border-[#F4F4F4] bg-[#FCFCFC]'}"
				aria-current={active ? 'step' : undefined}
			>
				<div class="flex min-w-0 items-center gap-4.5">
					<!-- Indikator dekoratif, bukan radio sungguhan. -->
					<span
						class="flex size-6.25 shrink-0 items-center justify-center rounded-full {active
							? 'bg-[#007CF0]'
							: 'bg-[#A2A2A2]'}"
					>
						<span class="rounded-full bg-white {active ? 'size-2' : 'size-5'}"></span>
					</span>

					<div class="min-w-0">
						<p
							class="text-[14px] {active
								? 'font-bold text-[#0058AA]'
								: 'font-medium text-[#343434]'}"
						>
							{section.no}. {section.title}
						</p>
						<p class="mt-2 text-[12px] text-[#343434]">{section.soal}</p>
						<p class="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#777777]">
							<MaskIcon src={iconTimeLine} class="size-3.5" />
							{section.durasi}
						</p>
					</div>
				</div>

				{#if !active}
					<MaskIcon src={iconLock} class="size-7 text-[#A2A2A2]" />
				{/if}
			</div>
		{/each}
	</div>
</div>
