<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import PauseIcon from '@lucide/svelte/icons/pause';
	import { iconBookmarkOutline, iconPlay, iconRibbonSolid, iconSoundHigh } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { TOTAL_SECTION_QUESTIONS, type QuizQuestion, type OptionId } from '$lib/quiz-shared';

	let {
		question,
		position,
		selected,
		marked,
		prompt,
		onSelect,
		onToggleMark
	}: {
		question: QuizQuestion;
		position: number;
		selected: OptionId | undefined;
		marked: boolean;
		/** Instruksi di atas soal; tiap bagian tes punya kalimat sendiri. */
		prompt?: string;
		onSelect: (id: OptionId) => void;
		onToggleMark: () => void;
	} = $props();

	// Audio dekoratif: ekspor desain tidak menyertakan berkas suara. State ini
	// ter-reset sendiri karena parent me-remount kartu tiap ganti soal ({#key}).
	let playing = $state(false);
</script>

{#snippet answerOptions()}
	<p class="text-[12px] font-bold text-[#343434]">{question.question}</p>

	<RadioGroup.Root
		value={selected ?? ''}
		onValueChange={(v) => onSelect(v as OptionId)}
		class="gap-3"
	>
		{#each question.options as option (option.id)}
			{@const isSelected = selected === option.id}
			<!-- Seluruh baris jadi target klik sekaligus radio yang keyboard-accessible,
			     jadi dipakai primitive bits-ui langsung (wrapper shadcn tidak menerima
			     children sehingga tidak bisa merender label di dalam item). -->
			<RadioGroupPrimitive.Item
				value={option.id}
				class="flex w-full items-center gap-3 rounded-[8px] border-[0.5px] px-4.5 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#007CF0] {isSelected
					? 'border-[#B3F5B3] bg-[#EFFDEF]'
					: 'border-[#E6EAF1] bg-white'}"
			>
				<span
					class="flex size-4.5 shrink-0 items-center justify-center rounded-full {isSelected
						? 'bg-[#007CF0]'
						: 'bg-[#C0C0C0]'}"
				>
					<span class="rounded-full bg-white {isSelected ? 'size-1.5' : 'size-3.5'}"></span>
				</span>
				<span class="min-w-0 text-[12px] text-[#343434]">{option.id}. {option.text}</span>
			</RadioGroupPrimitive.Item>
		{/each}
	</RadioGroup.Root>
{/snippet}

<!-- Bagian Reading memakai latar biru muda supaya panel bacaan yang putih menonjol. -->
<div
	class="flex flex-col gap-4.5 rounded-[8px] p-6 {question.passage ? 'bg-[#F7F9FE]' : 'bg-white'}"
>
	<div class="flex flex-wrap items-center justify-between gap-3">
		<p class="text-[14px] font-bold text-[#0058AA]">
			Soal {position} dari {TOTAL_SECTION_QUESTIONS}
		</p>
		<button
			type="button"
			onclick={onToggleMark}
			class="flex items-center gap-2 text-[14px] text-[#0058AA]"
			aria-pressed={marked}
		>
			<MaskIcon src={marked ? iconRibbonSolid : iconBookmarkOutline} class="size-4.5" />
			{marked ? 'Batal Tandai' : 'Ditandai Soal'}
		</button>
	</div>

	{#if prompt}
		<p class="text-[12px] text-[#343434]">{prompt}</p>
	{/if}

	<!-- Pemutar audio hanya untuk bagian yang memakainya (Listening). -->
	{#if question.audioDuration}
		<div
			class="flex h-12 items-center gap-3 rounded-[8px] border-[0.5px] border-[#E6EAF1] bg-white px-4.5"
		>
			<button
				type="button"
				onclick={() => (playing = !playing)}
				class="shrink-0 text-[#01296E]"
				aria-label={playing ? 'Jeda audio' : 'Putar audio'}
			>
				{#if playing}
					<PauseIcon class="size-4.5" />
				{:else}
					<MaskIcon src={iconPlay} class="size-4.5" />
				{/if}
			</button>
			<span class="shrink-0 text-[12px] whitespace-nowrap text-[#343434]">
				00:00 / {question.audioDuration}
			</span>
			<span class="relative h-0.5 min-w-0 flex-1 rounded-full bg-[#E6F2FE]">
				<span class="absolute -top-[3px] left-0 size-2 rounded-full bg-[#007CF0]"></span>
			</span>
			<MaskIcon src={iconSoundHigh} class="size-4.5 text-[#01296E]" />
			<span class="shrink-0 text-[12px] text-[#01296E]">1.0x</span>
		</div>
	{/if}

	{#if question.passage}
		<div class="grid gap-6 min-[1100px]:grid-cols-2">
			<div class="flex min-w-0 flex-col gap-4.5 rounded-[8px] bg-white p-6">
				<p class="text-[12px] font-bold text-[#343434]">{question.passage.title}</p>
				{#each question.passage.paragraphs as paragraph, i (i)}
					<p class="text-justify text-[12px] text-[#343434]">{paragraph}</p>
				{/each}
			</div>
			<div class="flex min-w-0 flex-col gap-4.5">
				{@render answerOptions()}
			</div>
		</div>
	{:else}
		{@render answerOptions()}
	{/if}
</div>
