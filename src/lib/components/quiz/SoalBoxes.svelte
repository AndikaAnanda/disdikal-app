<script lang="ts">
	import { boxClass, boxState } from './boxState';
	import { iconRibbonSolid } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { cn } from '$lib/utils';
	import type { QuizQuestion, OptionId } from '$lib/quiz-shared';

	let {
		questions,
		currentId,
		answers,
		marked,
		onSelect,
		window: windowSize,
		class: className
	}: {
		questions: QuizQuestion[];
		currentId: number;
		answers: Record<number, OptionId>;
		marked: Record<number, boolean>;
		onSelect: (index: number) => void;
		/** Kalau diisi, hanya sebagian nomor yang ditampilkan (strip bawah). */
		window?: number;
		class?: string;
	} = $props();

	type Slot = { kind: 'box'; index: number } | { kind: 'gap'; key: string };

	const slots = $derived.by<Slot[]>(() => {
		const total = questions.length;
		const all: Slot[] = questions.map((_, index) => ({ kind: 'box', index }));
		if (!windowSize || total <= windowSize + 2) return all;

		const currentIndex = questions.findIndex((q) => q.id === currentId);
		const half = Math.floor((windowSize - 1) / 2);
		const start = Math.min(Math.max(currentIndex - half, 0), total - windowSize);
		const end = start + windowSize - 1;

		const out: Slot[] = [];
		if (start > 0) {
			out.push({ kind: 'box', index: 0 });
			if (start > 1) out.push({ kind: 'gap', key: 'head' });
		}
		for (let i = start; i <= end; i++) out.push({ kind: 'box', index: i });
		if (end < total - 1) {
			if (end < total - 2) out.push({ kind: 'gap', key: 'tail' });
			out.push({ kind: 'box', index: total - 1 });
		}
		return out;
	});

	const box = 'flex size-10 items-center justify-center rounded-[8px] text-[16px] font-bold';
</script>

<div class={cn('flex flex-wrap items-center gap-2', className)}>
	{#each slots as slot (slot.kind === 'box' ? questions[slot.index].id : slot.key)}
		{#if slot.kind === 'gap'}
			<span class={cn(box, boxClass.unanswered, 'cursor-default')} aria-hidden="true">…</span>
		{:else}
			{@const question = questions[slot.index]}
			{@const state = boxState(question.id, currentId, answers, marked)}
			<button
				type="button"
				onclick={() => onSelect(slot.index)}
				aria-label="Soal {question.id}"
				aria-current={state === 'current' ? 'true' : undefined}
				class={cn(box, boxClass[state])}
			>
				{#if state === 'marked'}
					<MaskIcon src={iconRibbonSolid} class="size-4.5" />
				{:else}
					{question.id}
				{/if}
			</button>
		{/if}
	{/each}
</div>
