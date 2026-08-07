<script lang="ts">
	import SpriteImage from './SpriteImage.svelte';
	import spriteLangkah from '$lib/assets/tutorial-kamera-icon/image-300.png';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconArrowNext } from '$lib/components/tes-bahasa/icons';
	import type { LangkahKamera } from '$lib/tutorial-kamera-data';

	let { steps }: { steps: LangkahKamera[] } = $props();
</script>

<div class="rounded-[8px] bg-white p-6">
	<h2 class="text-[16px] font-bold text-[#0071DA]">A. Menyalakan Kamera</h2>
	<p class="mt-3 text-[12px] text-[#343434]">
		Ikuti langkah-langkah berikut untuk menyalakan kamera
	</p>

	<div
		class="mt-3 flex flex-col items-center gap-4 min-[900px]:flex-row min-[900px]:justify-between"
	>
		{#each steps as step, i (step.id)}
			{#if i > 0}
				<!-- Panah hanya relevan saat kartu berjajar; saat menumpuk ikut diputar. -->
				<span
					class="flex w-8.75 shrink-0 items-center justify-center rounded-full bg-[#E6F2FE] py-2 text-[#007CF0] max-[899px]:rotate-90"
				>
					<MaskIcon src={iconArrowNext} class="size-4.5" />
				</span>
			{/if}

			<div class="flex shrink-0 items-start rounded-[8px] border-[0.5px] border-[#B0BDD2] p-3">
				<span
					class="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#007CF0] text-[12px] font-bold text-white"
				>
					{step.no}
				</span>
				<div class="flex flex-col items-center gap-4.5 pr-3">
					<SpriteImage src={spriteLangkah} sprite={step.sprite} class="h-20 w-25" />
					<div class="flex flex-col items-center gap-2 text-center text-[#343434]">
						<p class="text-[14px] font-bold">{step.title}</p>
						<div class="flex flex-col gap-1 text-[12px]">
							{#each step.lines as line (line)}
								<p>{line}</p>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
