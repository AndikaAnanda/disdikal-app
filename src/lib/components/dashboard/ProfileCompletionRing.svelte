<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { resolve } from '$app/paths';
	import CompletionRing from '$lib/components/shared/CompletionRing.svelte';
	import { Button } from '$lib/components/ui/button';

	let { percent, remaining }: { percent: number; remaining: string } = $props();
</script>

<div class="relative z-2 shrink-0 text-left md:text-right">
	<p class="mb-0.5 text-[16px] font-bold">Kelengkapan Profile</p>
	<p class="mb-2.5 text-[12px] text-white">{remaining}</p>
	<CompletionRing
		{percent}
		class="mb-3 size-20 sm:size-24 md:ml-auto"
		innerClass="size-15.5 text-base font-extrabold sm:size-18.5 sm:text-[19px]"
	>
		{percent}%
	</CompletionRing>
	<Button
		href={resolve('/profil')}
		class="h-auto gap-1.5 rounded-lg bg-[#007CF0] px-3.5 py-2 text-[11px] font-bold text-white hover:bg-[#2457b3]"
	>
		Lengkapi Profile
		<ArrowRightIcon class="size-3.25" />
	</Button>
</div>
