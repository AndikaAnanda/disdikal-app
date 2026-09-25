<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import XIcon from '@lucide/svelte/icons/x';
	import StatTiles, { type StatTile } from './StatTiles.svelte';
	import type { RiwayatStatus } from '$lib/pengajuan-shared';

	let { rows }: { rows: { status: RiwayatStatus }[] } = $props();

	const count = (status: RiwayatStatus) => rows.filter((r) => r.status === status).length;

	const items = $derived<StatTile[]>([
		{ id: 'total', label: 'Total Pengajuan', value: rows.length, icon: CopyIcon, tone: 'blue' },
		{
			id: 'disetujui',
			label: 'Disetujui',
			value: count('Disetujui'),
			icon: CheckIcon,
			tone: 'green'
		},
		{
			id: 'proses',
			label: 'Dalam Proses',
			value: count('Dalam Proses'),
			icon: ClockIcon,
			tone: 'orange'
		},
		{ id: 'ditolak', label: 'Ditolak', value: count('Ditolak'), icon: XIcon, tone: 'red' }
	]);
</script>

<StatTiles {items} />
