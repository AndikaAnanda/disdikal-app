<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import { Button } from '$lib/components/ui/button';
	import type { DownloadItem } from '$lib/dashboard-data';

	let { items }: { items: DownloadItem[] } = $props();
</script>

{#each items as item (item.id)}
	<div
		class="flex items-center justify-between gap-2.5 border-b border-(--dash-border) py-2.5 first:pt-0 last:border-b-0 last:pb-0"
	>
		<div class="flex min-w-0 flex-1 items-center gap-2.5">
			<FileTextIcon class="size-5.5 shrink-0 text-(--accent-red)" />
			<span class="truncate text-xs font-semibold text-[#33394a]" title={item.fileName}>
				{item.fileName}
			</span>
		</div>
		<Button
			size="sm"
			class="shrink-0 rounded-md bg-(--navy-900) px-3.5 text-[11.5px] font-bold text-white hover:bg-(--navy-950)"
		>
			Download
		</Button>
	</div>
{/each}
