<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import MegaphoneIcon from '@lucide/svelte/icons/megaphone';
	import * as Card from '$lib/components/ui/card';
	import type { AnnouncementSummary } from '$lib/dashboard-data';

	let { announcement }: { announcement: AnnouncementSummary } = $props();
</script>

<Card.Root
	class="flex-row gap-4 rounded-[14px] border border-[#007CF0] bg-[#F5F7FE] px-5 py-5 shadow-none ring-0 sm:px-7 sm:py-6.5"
>
	<MegaphoneIcon class="size-8.75 shrink-0 self-start text-[#4263E9]" />

	<div class="flex min-w-0 flex-1 flex-col gap-3">
		<Card.Title class="px-0 text-base font-bold text-[#4263E9] sm:text-[18px]"
			>Pengumuman</Card.Title
		>

		<Card.Content class="px-0 text-[14px]">
			<p class="leading-snug font-bold text-black">{announcement.title}</p>
			<p class="mt-2.5 text-black">{announcement.subLabel}</p>
			<span class="font-bold text-[#4263E9]">{announcement.dateRange}</span>
		</Card.Content>

		<Card.Footer
			class="mt-auto gap-1.5 self-end px-0 text-[11px] font-bold text-[#4263E9]"
			aria-disabled="true"
		>
			Lihat Pengumuman
			<ArrowRightIcon class="size-4.5" />
		</Card.Footer>
	</div>
</Card.Root>
