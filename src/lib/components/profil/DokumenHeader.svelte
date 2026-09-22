<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import { Button } from '$lib/components/ui/button';

	let {
		icon: Icon = FileTextIcon,
		title,
		subtitle,
		summary,
		withAction = false
	}: {
		icon?: LucideIcon;
		title: string;
		subtitle: string;
		summary?: string;
		withAction?: boolean;
	} = $props();
</script>

<div
	class="flex flex-wrap items-center gap-4 rounded-[10px] border border-(--dash-border) bg-white px-5 py-4"
>
	<span
		class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
	>
		<Icon class="size-4.5" strokeWidth={2} />
	</span>
	<div class="min-w-0 flex-1">
		<h1 class="text-[15px] font-bold text-(--navy-950)">{title}</h1>
		<p class="text-[11px] text-(--dash-muted)">{subtitle}</p>
	</div>
	{#if summary || withAction}
		<div class="flex flex-wrap items-center gap-3 sm:ml-auto">
			{#if summary}
				<span class="text-[11px] text-(--dash-muted)">{summary}</span>
			{/if}
			{#if withAction}
				<Button
					type="button"
					aria-disabled="true"
					class="h-auto cursor-pointer gap-1.5 rounded-md bg-(--accent-blue) px-3.5 py-2 text-[11.5px] font-semibold text-white hover:bg-(--brand-600)"
				>
					<PlusIcon class="size-3.5" strokeWidth={2.4} />
					Tambah Dokumen
				</Button>
			{/if}
		</div>
	{/if}
</div>
