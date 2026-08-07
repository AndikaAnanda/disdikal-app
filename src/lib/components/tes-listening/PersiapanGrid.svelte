<script lang="ts">
	import { iconCheckOne, persiapanAvatar } from './icons';
	import persiapanIntroImg from '$lib/assets/tes-listening-icon/persiapan-intro.png';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { PersiapanCard, SectionHeader } from '$lib/tes-listening-data';

	let { intro, cards }: { intro: SectionHeader; cards: PersiapanCard[] } = $props();
</script>

<div class="flex flex-col gap-4.5">
	<div class="flex items-start gap-4.5">
		<img src={persiapanIntroImg} alt="" class="h-10 w-12 shrink-0 object-contain" />
		<div class="min-w-0">
			<p class="text-[16px] font-bold text-[#0071DA]">{intro.title}</p>
			<p class="mt-0.5 text-[12px] text-[#343434]">{intro.desc}</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4.5 min-[700px]:grid-cols-2 min-[1300px]:grid-cols-3">
		{#each cards as card (card.id)}
			<div
				class="flex items-start gap-3 rounded-[12px] border-[0.5px] border-[#B0BDD2] p-4.5 shadow-[0px_4px_4px_0px_#B0BDD2]"
			>
				<span
					class="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#007CF0] text-[12px] font-bold text-white"
				>
					{card.no}
				</span>

				<div class="flex min-w-0 flex-col gap-3">
					<div class="flex flex-wrap items-center gap-3">
						<img
							src={persiapanAvatar[card.id]}
							alt=""
							class="size-10 shrink-0 rounded-full object-cover"
						/>
						<p class="text-[16px] font-bold text-[#0058AA]">{card.title}</p>
						{#if card.badge}
							<span
								class="rounded-[8px] bg-[#E6F2FE] px-3 py-1 text-[12px] font-bold text-[#007CF0]"
							>
								{card.badge}
							</span>
						{/if}
					</div>

					<ul class="flex flex-col gap-3">
						{#each card.bullets as bullet (bullet.lines[0])}
							<li class="flex items-start gap-2">
								<MaskIcon src={iconCheckOne} class="mt-0.5 size-3.5 text-[#007CF0]" />
								<span class="min-w-0 text-[12px] text-[#343434]">
									{#each bullet.lines as line (line)}
										<span class="block">{line}</span>
									{/each}
								</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>
