<script lang="ts">
	import {
		iconArrowNext,
		iconExamMultiple,
		iconTimeLine,
		testSectionAccent,
		testSectionIcon
	} from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { TestSection } from '$lib/tes-bahasa-data';

	let { sections }: { sections: TestSection[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconExamMultiple} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Daftar Bagian Tes</h2>
	</div>

	<div class="flex flex-col gap-3.5">
		{#each sections as section (section.id)}
			<!-- Sesi tes belum bisa dibuka (belum ada endpoint), jadi baris ini
			     dekoratif: tidak dibungkus <a>/<button>. -->
			<div
				class="flex flex-col gap-3.5 rounded-[10px] border border-(--dash-border) px-4 py-3.5 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-5"
			>
				<span
					class="flex size-11 shrink-0 items-center justify-center rounded-[10px] {testSectionAccent[
						section.id
					]}"
				>
					<MaskIcon src={testSectionIcon[section.id]} class="size-5.5" />
				</span>

				<div class="min-w-0 flex-1">
					<p class="text-[14px] font-bold text-[#0071DA]">{section.no}. {section.title}</p>
					<p class="mt-1 text-[12px] leading-snug text-[#5D5D5D]">{section.desc}</p>
					{#if section.extra}
						<p class="text-[12px] text-[#5D5D5D]">{section.extra}</p>
					{/if}
				</div>

				<div class="shrink-0 min-[560px]:text-right">
					<p class="text-[14px] font-bold text-[#343434]">{section.soal}</p>
					<p
						class="mt-1 flex items-center gap-1.5 text-[12px] text-[#777777] min-[560px]:justify-end"
					>
						<MaskIcon src={iconTimeLine} class="size-3.5" />
						{section.durasi}
					</p>
				</div>

				<span
					class="flex size-9 shrink-0 items-center justify-center rounded-full bg-(--brand-50) text-[#007CF0]"
				>
					<MaskIcon src={iconArrowNext} class="size-3.5" />
				</span>
			</div>
		{/each}
	</div>
</div>
