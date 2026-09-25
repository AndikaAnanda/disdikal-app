<script lang="ts" module>
	export const koleksiBadge =
		'shrink-0 rounded-full bg-(--accent-blue-50) px-2 py-0.5 text-[9.5px] font-semibold whitespace-nowrap text-(--accent-blue)';
	export const koleksiKebab =
		'flex shrink-0 cursor-pointer items-center text-(--dash-muted) hover:text-(--navy-950)';
</script>

<script lang="ts">
	import DownloadIcon from '@lucide/svelte/icons/download';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	let { class: className }: { class?: string } = $props();

	const base = 'h-auto cursor-pointer gap-1.5 rounded-md px-3 py-1.5 text-[10.5px] font-semibold';
</script>

<div class={cn('flex gap-2', className)}>
	<Button
		type="button"
		aria-disabled="true"
		class={cn(base, 'flex-1 bg-(--accent-blue) text-white hover:bg-(--brand-500)')}
	>
		<EyeIcon class="size-3.5" strokeWidth={2} />
		Baca
	</Button>
	<Button
		type="button"
		variant="outline"
		aria-disabled="true"
		class={cn(
			base,
			'flex-1 border-(--dash-border) bg-white text-(--dash-text) hover:bg-(--brand-50) hover:text-(--navy-950)'
		)}
	>
		<DownloadIcon class="size-3.5" strokeWidth={2} />
		Download
	</Button>
</div>
