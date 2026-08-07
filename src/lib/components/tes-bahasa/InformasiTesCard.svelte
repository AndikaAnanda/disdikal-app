<script lang="ts">
	import { iconExamMultiple, testInfoAccent, testInfoIcon } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { TestInfoItem } from '$lib/tes-bahasa-data';

	let { items }: { items: TestInfoItem[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconExamMultiple} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Informasi Tes</h2>
	</div>

	<!-- Divider antar item pakai border-left mulai item kedua; <hr> terpisah ikut
	     salah posisi saat item membungkus ke baris baru. -->
	<div class="grid grid-cols-2 gap-y-4 min-[560px]:grid-cols-3 xl:flex xl:justify-between">
		{#each items as item (item.id)}
			<div
				class="flex items-center gap-3.5 xl:border-l xl:border-(--dash-border) xl:px-5 xl:first:border-l-0 xl:first:pl-0"
			>
				<span
					class="flex size-8.75 shrink-0 items-center justify-center rounded-[8px] {testInfoAccent[
						item.id
					]}"
				>
					<MaskIcon src={testInfoIcon[item.id]} class="size-4.5" />
				</span>
				<div class="min-w-0">
					<p class="text-[12px] text-[#5D5D5D]">{item.label}</p>
					<p class="mt-1 text-[14px] font-bold text-[#343434]">{item.value}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
