<script lang="ts">
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import { cn } from '$lib/utils';

	let { class: className }: { class?: string } = $props();
</script>

<span
	class={cn(
		'inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-(--accent-blue) bg-white px-3 py-1 text-[11px] font-semibold text-(--accent-blue) transition-colors hover:bg-(--accent-blue-50)',
		className
	)}
	aria-disabled="true"
>
	Edit
	<PencilIcon class="size-3" strokeWidth={2} />
</span>
