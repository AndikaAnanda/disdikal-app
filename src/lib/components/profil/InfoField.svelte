<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';

	let { icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string } = $props();
</script>

<div class="flex flex-col gap-1 border-b border-(--dash-border) py-3">
	<div class="flex items-center gap-2">
		<Icon class="size-3.5 shrink-0 text-(--navy-950)" strokeWidth={2} />
		<span class="text-[11px] text-(--navy-950)">{label}</span>
	</div>
	<p class="pl-5.5 text-[11.5px] wrap-break-word text-(--dash-text)">{value}</p>
</div>
