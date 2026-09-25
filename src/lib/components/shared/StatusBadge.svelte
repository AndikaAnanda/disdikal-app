<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { STATUS_TONE, type BadgeTone } from '$lib/pengajuan-shared';

	let { status, tone }: { status: string; tone?: BadgeTone } = $props();

	const palette: Record<BadgeTone, string> = {
		green: 'bg-(--accent-green-50) text-(--accent-green)',
		orange: 'bg-(--accent-orange-50) text-(--accent-orange)',
		red: 'bg-(--accent-red-50) text-(--accent-red)',
		blue: 'bg-(--accent-blue-50) text-(--accent-blue)'
	};

	const resolved = $derived(tone ?? STATUS_TONE[status] ?? 'blue');
</script>

<Badge
	class="rounded-md border-transparent px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap {palette[
		resolved
	]}"
>
	{status}
</Badge>
