<script lang="ts">
	import { iconInfoRounded, infoStripIcon } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { InfoStripItem, SectionHeader } from '$lib/tes-listening-data';

	let { data, items }: { data: SectionHeader; items: InfoStripItem[] } = $props();
</script>

<div class="flex flex-col gap-4.5 rounded-[8px] bg-[#F7F9FE] p-3">
	<div class="flex items-start gap-3">
		<MaskIcon src={iconInfoRounded} class="mt-0.5 size-8.75 text-[#007CF0]" />
		<div class="min-w-0">
			<p class="text-[16px] font-bold text-[#343434]">{data.title}</p>
			<p class="mt-0.5 text-[12px] text-[#343434]">{data.desc}</p>
		</div>
	</div>

	<!-- Divider antar kolom pakai border-left mulai item kedua, pola sama seperti
	     InformasiTesCard di halaman Tes Bahasa Inggris. -->
	<div
		class="grid grid-cols-1 gap-y-4 min-[560px]:grid-cols-2 xl:flex xl:justify-between xl:px-12.5"
	>
		{#each items as item (item.id)}
			<div
				class="flex items-center gap-3 xl:border-l xl:border-(--dash-border) xl:px-5 xl:first:border-l-0 xl:first:pl-0"
			>
				<span
					class="flex size-11.25 shrink-0 items-center justify-center rounded-full bg-white text-[#007CF0]"
				>
					<MaskIcon src={infoStripIcon[item.id]} class="size-6" />
				</span>
				<div class="min-w-0 text-[14px] text-[#343434]">
					<p>{item.label}</p>
					<p class="mt-1 font-bold">{item.value}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
