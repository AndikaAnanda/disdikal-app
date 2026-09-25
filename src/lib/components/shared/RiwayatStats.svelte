<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import XIcon from '@lucide/svelte/icons/x';
	import type { RiwayatStatus } from '$lib/pengajuan-shared';

	let { rows }: { rows: { status: RiwayatStatus }[] } = $props();

	const count = (status: RiwayatStatus) => rows.filter((r) => r.status === status).length;

	const stats = $derived<
		{
			id: string;
			label: string;
			value: number;
			icon: LucideIcon;
			tile: string;
			text: string;
			bg: string;
		}[]
	>([
		{
			id: 'total',
			label: 'Total Pengajuan',
			value: rows.length,
			icon: CopyIcon,
			tile: 'bg-(--accent-blue)',
			text: 'text-(--accent-blue)',
			bg: 'bg-(--accent-blue-50)/60 border-(--accent-blue)/20'
		},
		{
			id: 'disetujui',
			label: 'Disetujui',
			value: count('Disetujui'),
			icon: CheckIcon,
			tile: 'bg-(--accent-green)',
			text: 'text-(--accent-green)',
			bg: 'bg-(--accent-green-50)/60 border-(--accent-green)/20'
		},
		{
			id: 'proses',
			label: 'Dalam Proses',
			value: count('Dalam Proses'),
			icon: ClockIcon,
			tile: 'bg-(--accent-orange)',
			text: 'text-(--accent-orange)',
			bg: 'bg-(--accent-orange-50)/60 border-(--accent-orange)/20'
		},
		{
			id: 'ditolak',
			label: 'Ditolak',
			value: count('Ditolak'),
			icon: XIcon,
			tile: 'bg-(--accent-red)',
			text: 'text-(--accent-red)',
			bg: 'bg-(--accent-red-50)/60 border-(--accent-red)/20'
		}
	]);
</script>

<div class="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
	{#each stats as stat (stat.id)}
		{@const Icon = stat.icon}
		<div class="flex items-center gap-3 rounded-[10px] border px-4 py-3.5 {stat.bg}">
			<span
				class="flex size-9 shrink-0 items-center justify-center rounded-lg text-white {stat.tile}"
			>
				<Icon class="size-4.5" strokeWidth={2.2} />
			</span>
			<div class="min-w-0">
				<p class="text-[10.5px] font-semibold {stat.text}">{stat.label}</p>
				<p class="text-[15px] leading-tight font-bold text-(--dash-text)">{stat.value}</p>
			</div>
		</div>
	{/each}
</div>
