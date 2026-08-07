<script lang="ts">
	import PencilIcon from '@lucide/svelte/icons/pencil';
	import { cn } from '$lib/utils';

	let { class: className }: { class?: string } = $props();
</script>

<!-- Belum ada endpoint update profil, jadi dirender non-aktif. -->
<span
	class={cn(
		'inline-flex cursor-default items-center gap-1.5 rounded-lg border border-(--brand-500) bg-(--brand-50) px-3.5 py-1.75 text-[12.5px] font-bold text-(--brand-600) opacity-60',
		className
	)}
	aria-disabled="true"
>
	Edit <PencilIcon class="size-3" />
</span>
