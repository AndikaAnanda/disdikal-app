<script lang="ts">
	import { iconTimerOutline } from './icons';
	import CompletionRing from '$lib/components/shared/CompletionRing.svelte';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { TOTAL_SECTION_SECONDS } from '$lib/quiz-shared';

	let { remaining }: { remaining: number } = $props();

	// Ring terisi seiring waktu yang sudah terpakai, bukan sisa waktu.
	const percent = $derived(
		Math.round(((TOTAL_SECTION_SECONDS - remaining) / TOTAL_SECTION_SECONDS) * 100)
	);

	function format(total: number): string {
		const m = Math.floor(Math.max(0, total) / 60);
		const s = Math.max(0, total) % 60;
		return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
	}
</script>

<div class="rounded-[8px] bg-white p-6">
	<div class="mb-4.5 flex items-center gap-3">
		<MaskIcon src={iconTimerOutline} class="size-5 text-[#01296E]" />
		<h2 class="text-[16px] font-bold text-[#01296E]">Waktu Tes</h2>
	</div>

	<div class="flex justify-center">
		<CompletionRing
			{percent}
			fill="#007CF0"
			track="#EBEBEB"
			class="size-37.5"
			innerClass="size-32 gap-1.5 bg-white"
		>
			<span class="text-[12px] text-[#01296E]">Sisa Waktu</span>
			<span class="text-[24px] leading-none font-bold text-[#01296E]">{format(remaining)}</span>
			<span class="text-[12px] text-[#01296E]">dari {format(TOTAL_SECTION_SECONDS)}</span>
		</CompletionRing>
	</div>
</div>
