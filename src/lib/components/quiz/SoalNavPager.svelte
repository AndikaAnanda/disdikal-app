<script lang="ts">
	import { iconArrowBack, iconArrowNext, iconCheckRounded } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { TOTAL_SECTION_QUESTIONS } from '$lib/quiz-shared';

	let {
		canGoPrev,
		sectionComplete,
		answered,
		sectionTitle,
		nextSectionLabel,
		nextSectionHref,
		completionNote = 'Silakan lanjutkan ke bagian berikutnya',
		onPrev,
		onNext
	}: {
		canGoPrev: boolean;
		sectionComplete: boolean;
		answered: number;
		sectionTitle: string;
		nextSectionLabel: string;
		/** Kosong kalau bagian berikutnya belum punya halaman. */
		nextSectionHref?: string;
		/** Bagian terakhir tidak mengarahkan ke bagian lain, jadi kalimatnya bisa diganti. */
		completionNote?: string;
		onPrev: () => void;
		onNext: () => void;
	} = $props();
</script>

<div class="flex flex-col gap-4.5">
	<div class="flex flex-wrap items-center justify-between gap-3">
		<Button
			onclick={onPrev}
			disabled={!canGoPrev}
			class="h-11 gap-3 rounded-[8px] border border-[#E6EAF1] bg-white px-4.5 text-[14px] font-bold text-[#B0BDD2] hover:bg-[#F7F9FE]"
		>
			<MaskIcon src={iconArrowBack} class="size-4.5" />
			Soal Sebelumya
		</Button>

		{#if sectionComplete}
			<!-- Tanpa href kalau bagian berikutnya belum punya halaman. -->
			<Button
				href={nextSectionHref}
				class="h-11 gap-3 rounded-[8px] bg-[#01296E] px-4.5 text-[14px] font-bold text-white hover:bg-[#0058AA]"
			>
				{nextSectionLabel}
				<MaskIcon src={iconArrowNext} class="size-4.5" />
			</Button>
		{:else}
			<Button
				onclick={onNext}
				class="h-11 gap-3 rounded-[8px] bg-[#01296E] px-4.5 text-[14px] font-bold text-white hover:bg-[#0058AA]"
			>
				Soal Selanjutnya
				<MaskIcon src={iconArrowNext} class="size-4.5" />
			</Button>
		{/if}
	</div>

	{#if sectionComplete}
		<div
			class="flex items-start gap-3 rounded-[8px] border-[0.5px] border-[#B3F5B3] bg-[#EFFDEF] px-4.5 py-3"
		>
			<MaskIcon src={iconCheckRounded} class="mt-0.5 size-4.5 shrink-0 text-[#40A540]" />
			<div class="min-w-0 text-[12px] text-[#40A540]">
				<p>
					Anda telah menyelesaikan {answered} dari {TOTAL_SECTION_QUESTIONS} soal {sectionTitle}
				</p>
				<p class="mt-0.5">{completionNote}</p>
			</div>
		</div>
	{/if}
</div>
