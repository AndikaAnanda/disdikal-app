<script lang="ts">
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconGlobeBook } from '$lib/components/tes-bahasa/icons';
	import type { TutorialMenuItem } from '$lib/tutorial-kamera-data';

	let { items }: { items: TutorialMenuItem[] } = $props();
</script>

<div class="rounded-[8px] bg-white p-6">
	<div class="mb-4.5 flex items-center gap-3">
		<MaskIcon src={iconGlobeBook} class="size-5 text-[#01296E]" />
		<h2 class="text-[16px] font-bold text-[#01296E]">Daftar Tutorial</h2>
	</div>

	<div class="flex flex-col gap-2">
		{#each items as item (item.id)}
			<!-- Tutorial ke-2 belum dibuat, jadi dirender non-navigable. -->
			<span
				class="flex gap-3 rounded-[8px] border-[0.5px] px-4.5 py-3 {item.active
					? 'border-[#E6F2FE] bg-[#F7F9FE]'
					: 'cursor-default border-[#F4F4F4] bg-[#FCFCFC]'}"
				aria-current={item.active ? 'page' : undefined}
				aria-disabled={item.active ? undefined : 'true'}
			>
				<span
					class="flex size-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white {item.active
						? 'bg-[#007CF0]'
						: 'bg-[#C0C0C0]'}"
				>
					{item.no}
				</span>
				<span class="min-w-0">
					<span
						class="block text-[14px] font-bold {item.active ? 'text-[#007CF0]' : 'text-[#343434]'}"
					>
						{item.title}
					</span>
					<span class="mt-1.5 block text-[12px] text-[#343434]">{item.desc}</span>
				</span>
			</span>
		{/each}
	</div>
</div>
