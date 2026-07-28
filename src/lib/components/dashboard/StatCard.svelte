<script lang="ts">
	import iconApproval from '$lib/assets/dashboard-stat-icon/material-symbols_approval-delegation-outline-rounded.png';
	import iconFolderCheck from '$lib/assets/dashboard-stat-icon/material-symbols_folder-check-2-outline.png';
	import iconDownload from '$lib/assets/dashboard-stat-icon/mage_file-download.png';
	import iconInput from '$lib/assets/dashboard-stat-icon/material-symbols_trackpad-input-outline-rounded.png';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import type { StatAccent, StatItem } from '$lib/dashboard-data';

	let { stat }: { stat: StatItem } = $props();

	const icons: Record<string, string> = {
		total: iconInput,
		dokumen: iconFolderCheck,
		verifikasi: iconApproval,
		jadwal: iconDownload,
		hasil: iconDownload
	};
	const accentBg: Record<StatAccent, string> = {
		blue: 'bg-[#007CF0]',
		green: 'bg-[#04DA00]',
		yellow: 'bg-[#FFDF0C]',
		teal: 'bg-[#00CEA8]'
	};

	const icon = $derived(icons[stat.id] ?? iconInput);
</script>

<Card.Root size="sm" class="rounded-[14px] bg-white shadow-none ring-0">
	<Card.Content class="flex items-start gap-3">
		<span
			class={cn(
				'flex size-11.25 shrink-0 items-center justify-center rounded-[10px] text-white',
				accentBg[stat.accent]
			)}
		>
			<span
				class="size-8 bg-current mask-contain mask-center mask-no-repeat"
				style="mask-image: url({icon})"
			></span>
		</span>
		<div class="text-black">
			<p class="text-xs font-bold">{stat.label}</p>
			<p class="my-0.5 text-[18px] font-bold">{stat.value}</p>
			<p class="text-[12px]">{stat.subLabel}</p>
		</div>
	</Card.Content>
</Card.Root>
