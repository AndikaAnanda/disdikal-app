<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import CompletionRing from '$lib/components/shared/CompletionRing.svelte';
	import { Button } from '$lib/components/ui/button';

	let { percent }: { percent: number } = $props();
</script>

<div class="relative z-2 shrink-0 text-left md:text-center">
	<CompletionRing
		{percent}
		fill="#ffffff"
		track="rgb(255 255 255 / 0.25)"
		class="mb-3.5 size-26 sm:size-32.5 md:mx-auto"
		innerClass="size-21 gap-1 px-2 sm:size-26"
	>
		<span class="text-[24px] leading-none font-extrabold">{percent}%</span>
		<span class="max-w-20 text-center text-[10px] leading-tight text-[#cfe0ff]">
			Kelengkapan Profil
		</span>
	</CompletionRing>
	<!-- Flow "lengkapi profil" belum ada, jadi tombol sengaja tanpa href/onclick. -->
	<Button
		class="h-auto gap-2 rounded-lg border border-white/40 bg-white/15 px-4.5 py-2.5 text-[13px] font-bold text-white hover:bg-white/25"
	>
		Lengkapi Profile
		<ArrowRightIcon class="size-3.5" />
	</Button>
</div>
