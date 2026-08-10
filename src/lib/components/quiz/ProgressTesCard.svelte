<script lang="ts">
	import { iconGlobeBook } from './icons';
	import CompletionRing from '$lib/components/shared/CompletionRing.svelte';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { TOTAL_EXAM_QUESTIONS } from '$lib/quiz-shared';

	let { answered }: { answered: number } = $props();

	const percent = $derived(Math.round((answered / TOTAL_EXAM_QUESTIONS) * 100));

	const rows = $derived([
		{ id: 'belum', label: 'Belum Dikerjakan', value: TOTAL_EXAM_QUESTIONS - answered },
		// Desain menunjukkan 0 di kedua state; status ini tidak dipakai.
		{ id: 'proses', label: 'Sedang Proses', value: 0 },
		{ id: 'selesai', label: 'Selesai', value: answered }
	]);

	const dot: Record<string, string> = {
		belum: 'bg-[#C0C0C0]',
		proses: 'bg-[#FF9433]',
		selesai: 'bg-[#5AE95A]'
	};
</script>

<div class="rounded-[8px] bg-white p-6">
	<div class="mb-4.5 flex items-center gap-3">
		<MaskIcon src={iconGlobeBook} class="size-5 text-[#01296E]" />
		<h2 class="text-[16px] font-bold text-[#01296E]">Progress Tes</h2>
	</div>

	<div class="flex flex-col items-center gap-4.5">
		<CompletionRing
			{percent}
			fill="#5AE95A"
			track="#EBEBEB"
			class="size-30"
			innerClass="size-25 gap-1.5 bg-white"
		>
			<span class="text-[18px] leading-none font-bold text-[#01296E]">{percent}%</span>
			<span class="text-[10px] text-[#01296E]">{answered} / {TOTAL_EXAM_QUESTIONS} Soal</span>
		</CompletionRing>

		<div class="flex w-full flex-col gap-2">
			{#each rows as row (row.id)}
				<div class="flex items-center justify-between gap-3 text-[12px] text-[#343434]">
					<span class="flex min-w-0 items-center gap-2.5">
						<span class="size-3.5 shrink-0 rounded-full {dot[row.id]}"></span>
						{row.label}
					</span>
					<span class="shrink-0 whitespace-nowrap">{row.value} Soal</span>
				</div>
			{/each}
		</div>
	</div>
</div>
