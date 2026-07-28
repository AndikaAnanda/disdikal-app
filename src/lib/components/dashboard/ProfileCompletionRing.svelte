<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Button } from '$lib/components/ui/button';

	let { percent, remaining }: { percent: number; remaining: string } = $props();
</script>

<div class="relative z-2 shrink-0 text-right">
	<p class="mb-0.5 text-[16px] font-bold">Kelengkapan Profile</p>
	<p class="mb-2.5 text-[12px] text-white">{remaining}</p>
	<div
		class="progress-ring mb-3 ml-auto flex size-24 items-center justify-center rounded-full"
		style="--pct: {percent}%"
	>
		<div
			class="flex size-18.5 items-center justify-center rounded-full bg-[#12327a] text-[19px] font-extrabold"
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
		background: conic-gradient(#54A7F5 0 var(--pct), #ffffff var(--pct) 100%);
	}
</style>
