<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Button } from '$lib/components/ui/button';

	let { percent, remaining }: { percent: number; remaining: string } = $props();
</script>

<div class="relative z-2 shrink-0 text-left md:text-right">
	<p class="mb-0.5 text-[16px] font-bold">Kelengkapan Profile</p>
	<p class="mb-2.5 text-[12px] text-white">{remaining}</p>
	<div
		class="progress-ring mb-3 flex size-20 items-center justify-center rounded-full sm:size-24 md:ml-auto"
		style="--pct: {percent}%"
	>
		<div
			class="flex size-15.5 items-center justify-center rounded-full bg-[#12327a] text-base font-extrabold sm:size-18.5 sm:text-[19px]"
		>
			{percent}%
		</div>
	</div>
	<Button
		class="h-auto gap-1.5 rounded-lg bg-[#007CF0] px-3.5 py-2 text-[11px] font-bold text-white hover:bg-[#2457b3]"
	>
		Lengkapi Profile
		<ArrowRightIcon class="size-3.25" />
	</Button>
</div>

<style>
	/* conic-gradient digerakkan custom property --pct dari inline style.
	   Tidak ada utility Tailwind maupun komponen ring di shadcn/Bits UI. */
	.progress-ring {
		background: conic-gradient(#54a7f5 0 var(--pct), #ffffff var(--pct) 100%);
	}
</style>
