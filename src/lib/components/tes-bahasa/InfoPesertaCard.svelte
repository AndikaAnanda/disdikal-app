<script lang="ts">
	import { iconGlobeBook } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { PesertaField } from '$lib/tes-bahasa-data';

	let { fields }: { fields: PesertaField[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconGlobeBook} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Informasi Peserta</h2>
	</div>

	<dl class="flex flex-col">
		{#each fields as field (field.id)}
			<div
				class="flex items-start gap-2 border-b border-(--dash-border) py-3 first:pt-0 last:border-b-0 last:pb-0"
			>
				<dt class="w-27 shrink-0 text-[12px] font-bold text-[#343434]">{field.label}</dt>
				<span class="shrink-0 text-[12px] text-[#343434]">:</span>
				<dd class="min-w-0 flex-1 text-[12px] break-words text-[#5D5D5D]">{field.value}</dd>
			</div>
		{/each}
	</dl>
</div>
