<script lang="ts">
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconGlobeBook, stepIcon } from './icons';
	import type { PanduanStep } from '$lib/dokumen-data';

	let { paragraf, steps, bullets }: { paragraf: string; steps: PanduanStep[]; bullets: string[] } =
		$props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconGlobeBook} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Panduan Penting &amp; Informasi</h2>
	</div>

	<p class="text-justify text-[12px] leading-[20px] text-[#343434]">{paragraf}</p>

	<!-- Konektor dirender sebelum tiap langkah (i > 0), pola sama seperti
	     TrackingPanel; overflow-x menjaga langkah terakhir tidak terpotong. -->
	<div class="my-5 overflow-x-auto pb-1">
		<div class="flex min-w-105 items-start">
			{#each steps as step, i (step.id)}
				{#if i > 0}
					<div class="-mx-6 mt-4.25 h-0.5 flex-1 rounded-[50px] bg-[#0058AA]"></div>
				{/if}
				<div class="flex w-21 shrink-0 flex-col items-center text-center">
					<div
						class="mb-2 flex size-8.75 items-center justify-center rounded-full border-[0.5px] border-[#007CF0] shadow-[-2px_-2px_12px_0px_rgba(23,143,255,0.25),2px_2px_12px_0px_#178fff]"
					>
						<div
							class="flex size-6 items-center justify-center rounded-full bg-linear-to-b from-[#007CF0] to-[#00478A] text-white"
						>
							<MaskIcon src={stepIcon[step.id]} class="size-3.5" />
						</div>
					</div>
					<span class="text-[12px] leading-tight text-[#343434]">{step.label}</span>
				</div>
			{/each}
		</div>
	</div>

	<ul class="ms-4.5 list-disc space-y-1.5 text-[12px] text-[#343434]">
		{#each bullets as bullet (bullet)}
			<li>{bullet}</li>
		{/each}
	</ul>
</div>
