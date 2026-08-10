<script lang="ts">
	import { iconExamOutline, iconLock, iconTimeLine } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconCheckCircle } from '$lib/components/tes-bahasa/icons';
	import type { TestSection, TestSectionId } from '$lib/tes-bahasa-data';

	let {
		sections,
		activeId,
		doneIds = []
	}: {
		sections: TestSection[];
		activeId: TestSectionId;
		/** Bagian yang sudah diselesaikan; sisanya di luar `activeId` terkunci. */
		doneIds?: TestSectionId[];
	} = $props();

	type SectionState = 'done' | 'active' | 'locked';

	function stateOf(id: TestSectionId): SectionState {
		if (id === activeId) return 'active';
		if (doneIds.includes(id)) return 'done';
		return 'locked';
	}

	const shell: Record<SectionState, string> = {
		done: 'border-[#EFFDEF] bg-[#FCFFFC]',
		active: 'border-[#E6F2FE] bg-[#F7F9FE]',
		locked: 'border-[#EBEBEB] bg-[#FCFCFC]'
	};

	const title: Record<SectionState, string> = {
		done: 'font-bold text-[#343434]',
		active: 'font-bold text-[#0058AA]',
		locked: 'font-medium text-[#343434]'
	};

	const badge: Partial<Record<SectionState, { label: string; class: string }>> = {
		done: { label: 'Selesai', class: 'bg-[#EFFDEF] text-[#40A540]' },
		active: { label: 'Sedang Dikerjakan', class: 'bg-[#E6F2FE] text-[#0058AA]' }
	};
</script>

<div class="rounded-[8px] bg-white p-6">
	<div class="mb-4.5 flex items-center gap-3">
		<MaskIcon src={iconExamOutline} class="size-5 text-[#01296E]" />
		<h2 class="text-[16px] font-bold text-[#01296E]">Daftar Bagian Tes</h2>
	</div>

	<div class="flex flex-col gap-3">
		{#each sections as section (section.id)}
			{@const state = stateOf(section.id)}
			<div
				class="flex items-center justify-between gap-4.5 rounded-[8px] border-[0.5px] px-4.5 py-3 {shell[
					state
				]}"
				aria-current={state === 'active' ? 'step' : undefined}
			>
				<div class="flex min-w-0 items-center gap-4.5">
					{#if state === 'done'}
						<MaskIcon src={iconCheckCircle} class="size-6.25 shrink-0 text-[#40A540]" />
					{:else}
						<!-- Indikator dekoratif, bukan radio sungguhan. -->
						<span
							class="flex size-6.25 shrink-0 items-center justify-center rounded-full {state ===
							'active'
								? 'bg-[#007CF0]'
								: 'bg-[#A2A2A2]'}"
						>
							<span class="rounded-full bg-white {state === 'active' ? 'size-2' : 'size-5'}"></span>
						</span>
					{/if}

					<div class="min-w-0">
						<p class="text-[14px] {title[state]}">{section.no}. {section.title}</p>
						<p class="mt-2 text-[12px] text-[#343434]">{section.soal}</p>
						<p class="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#777777]">
							<MaskIcon src={iconTimeLine} class="size-3.5" />
							{section.durasi}
						</p>
					</div>
				</div>

				{#if badge[state]}
					<span
						class="shrink-0 rounded-[6px] px-2 py-1 text-[12px] font-bold whitespace-nowrap {badge[
							state
						]?.class}"
					>
						{badge[state]?.label}
					</span>
				{:else if state === 'locked'}
					<MaskIcon src={iconLock} class="size-7 shrink-0 text-[#A2A2A2]" />
				{/if}
			</div>
		{/each}
	</div>
</div>
