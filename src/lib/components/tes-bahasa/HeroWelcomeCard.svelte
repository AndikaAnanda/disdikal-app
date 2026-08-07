<script lang="ts">
	import { iconInfo } from './icons';
	import heroIllustration from '$lib/assets/tes-bahasa-icon/hero-clipboard.png';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { HeroWelcome } from '$lib/tes-bahasa-data';

	let { hero }: { hero: HeroWelcome } = $props();
</script>

<section class="rounded-[14px] bg-[#E6F2FE] p-5 sm:p-6.5">
	<div class="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-7">
		<img
			src={heroIllustration}
			alt=""
			width="150"
			height="150"
			class="size-32 shrink-0 object-contain sm:size-37.5"
		/>
		<div class="min-w-0 text-center sm:text-left">
			<p class="text-[16px] font-bold text-(--navy-950)">{hero.eyebrow}</p>
			<p class="mt-1 text-[22px] font-bold text-[#0071DA] lg:text-[28px]">{hero.title}</p>
			<span class="mt-2.5 mb-3.5 block h-1 w-9 rounded-full bg-[#FF9433] max-sm:mx-auto"></span>
			<p class="text-[14px] leading-relaxed text-[#343434]">{hero.desc}</p>
		</div>
	</div>

	<div class="mt-5 flex items-center gap-3.5 rounded-[10px] bg-white px-4 py-3.5">
		<span
			class="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#007CF0] text-white"
		>
			<MaskIcon src={iconInfo} class="size-3.5" />
		</span>
		<p class="text-[12px] text-[#5D5D5D]">{hero.notice}</p>
	</div>
</section>
