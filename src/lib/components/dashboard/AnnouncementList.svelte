<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import CloudUploadIcon from '@lucide/svelte/icons/cloud-upload';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import MonitorIcon from '@lucide/svelte/icons/monitor';
	import type { AnnouncementIcon, AnnouncementItem, AnnouncementTone } from '$lib/dashboard-data';

	let { items }: { items: AnnouncementItem[] } = $props();

	const icons: Record<AnnouncementIcon, LucideIcon> = {
		document: FileTextIcon,
		exam: MonitorIcon,
		upload: CloudUploadIcon,
		check: CircleCheckIcon
	};
	const tile: Record<AnnouncementTone, string> = {
		purple: 'bg-(--accent-purple-50) text-(--accent-purple)',
		blue: 'bg-(--accent-blue-50) text-(--accent-blue)',
		orange: 'bg-(--accent-orange-50) text-(--accent-orange)',
		green: 'bg-(--accent-green-50) text-(--accent-green)'
	};
</script>

<div class="divide-y divide-(--dash-border)">
	{#each items as item (item.id)}
		{@const Icon = icons[item.icon]}
		<div class="flex items-start gap-2.5 py-2.5 first:pt-0 last:pb-0">
			<span class="flex size-7 shrink-0 items-center justify-center rounded-md {tile[item.tone]}">
				<Icon class="size-3.75" strokeWidth={2} />
			</span>
			<div class="min-w-0 flex-1">
				<p class="text-[11.5px] leading-snug font-semibold text-(--dash-text)">{item.title}</p>
				<p class="mt-0.5 text-[10.5px] text-(--dash-muted)">{item.subtitle}</p>
			</div>
			<span class="shrink-0 text-[10px] whitespace-nowrap text-(--dash-muted)">{item.date}</span>
		</div>
	{/each}
</div>
