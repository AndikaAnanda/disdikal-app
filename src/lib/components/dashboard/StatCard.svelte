<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FileInputIcon from '@lucide/svelte/icons/file-input';
	import FolderCheckIcon from '@lucide/svelte/icons/folder-check';
	import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
	import StampIcon from '@lucide/svelte/icons/stamp';
	import { cn } from '$lib/utils';
	import type { StatAccent, StatItem } from '$lib/dashboard-data';

	let { stat }: { stat: StatItem } = $props();

	const icons: Record<string, LucideIcon> = {
		total: FileInputIcon,
		dokumen: FolderCheckIcon,
		verifikasi: StampIcon,
		jadwal: CalendarIcon,
		hasil: LayoutGridIcon
	};
	const accentBg: Record<StatAccent, string> = {
		blue: 'bg-(--accent-blue)',
		green: 'bg-(--accent-green)',
		orange: 'bg-(--accent-orange)',
		purple: 'bg-(--accent-purple)',
		pink: 'bg-(--accent-pink)'
	};
	const accentText: Record<StatAccent, string> = {
		blue: 'text-(--accent-blue)',
		green: 'text-(--accent-green)',
		orange: 'text-(--accent-orange)',
		purple: 'text-(--accent-purple)',
		pink: 'text-(--accent-pink)'
	};

	const Icon = $derived(icons[stat.id] ?? FileInputIcon);
</script>

<div
	class="flex items-center gap-3 rounded-[10px] border border-(--dash-border) bg-white px-4 py-3.5"
>
	<span
		class={cn(
			'flex size-9 shrink-0 items-center justify-center rounded-lg text-white',
			accentBg[stat.accent]
		)}
	>
		<Icon class="size-4.5" strokeWidth={1.9} />
	</span>
	<div class="min-w-0">
		<p class={cn('text-[10.5px] font-semibold', accentText[stat.accent])}>{stat.label}</p>
		<p class="my-0.5 truncate text-[15px] leading-tight font-bold text-(--dash-text)">
			{stat.value}
		</p>
		<p class="text-[10.5px] text-(--dash-muted)">{stat.subLabel}</p>
	</div>
</div>
