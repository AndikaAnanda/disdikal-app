<script lang="ts">
	import MaskIcon from './MaskIcon.svelte';
	import { cn } from '$lib/utils';

	let {
		icon,
		text,
		class: className,
		iconClass
	}: { icon: string; text: string; class?: string; iconClass?: string } = $props();
</script>

<div class={cn('flex items-start gap-3 rounded-[8px] bg-[#F7F9FE] px-3 py-2.5', className)}>
	<MaskIcon src={icon} class={cn('mt-px size-4.5 shrink-0 text-[#007CF0]', iconClass)} />
	<p class="min-w-0 text-[12px] text-[#343434]">{text}</p>
</div>
