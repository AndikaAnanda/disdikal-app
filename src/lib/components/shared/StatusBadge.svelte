<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import type { RiwayatStatus } from '$lib/pengajuan-shared';

	let { status }: { status: RiwayatStatus } = $props();

	const tone: Record<RiwayatStatus, string> = {
		Disetujui: 'bg-(--accent-green-50) text-(--accent-green)',
		'Dalam Proses': 'bg-(--accent-orange-50) text-(--accent-orange)',
		Ditolak: 'bg-(--accent-red-50) text-(--accent-red)'
	};
</script>

<Badge
	class="rounded-md border-transparent px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap {tone[
		status
	]}"
>
	{status}
</Badge>
