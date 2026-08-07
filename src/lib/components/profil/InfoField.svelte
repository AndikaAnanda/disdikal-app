<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';

	let { icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string } = $props();
</script>

<div class="flex items-start gap-3">
	<span
		class="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-(--brand-50) text-(--brand-600)"
	>
		<Icon class="size-4" />
	</span>
	<div class="min-w-0">
		<p class="mb-0.75 text-[12px] text-[#9aa2b1]">{label}</p>
		<p class="text-[13.5px] font-semibold break-words text-(--navy-950)">{value}</p>
	</div>
</div>
