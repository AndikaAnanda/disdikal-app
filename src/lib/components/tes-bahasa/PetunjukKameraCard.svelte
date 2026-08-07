<script lang="ts">
	import { iconCamera, iconCheckCircle } from './icons';
	import kameraGuide from '$lib/assets/tes-bahasa-icon/kamera-guide.png';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';

	let { intro, bullets }: { intro: string; bullets: string[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconCamera} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Petunjuk Kamera (WAJIB ON)</h2>
	</div>

	<p class="text-[12px] leading-relaxed text-[#5D5D5D]">{intro}</p>

	<div class="mt-4 flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-center">
		<img
			src={kameraGuide}
			alt="Contoh posisi peserta yang benar di depan kamera"
			class="w-full min-w-0 shrink-0 rounded-[8px] object-contain min-[420px]:w-1/2"
		/>
		<ul class="flex min-w-0 flex-1 flex-col gap-3">
			{#each bullets as bullet (bullet)}
				<li class="flex items-start gap-2.5">
					<MaskIcon src={iconCheckCircle} class="mt-0.5 size-4 text-[#5AE95A]" />
					<span class="text-[12px] leading-snug text-[#5D5D5D]">{bullet}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
