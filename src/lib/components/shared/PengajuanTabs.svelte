<script lang="ts" module>
	export const tabBar = 'flex gap-6 overflow-x-auto border-b border-(--dash-border)';
	export const tabBase =
		'flex shrink-0 items-center gap-2 border-b-2 pb-2.5 text-[12.5px] whitespace-nowrap transition-colors';
	export const tabActive = 'border-(--accent-blue) font-semibold text-(--accent-blue)';
	export const tabIdle = 'border-transparent text-[#9aa2b1] hover:text-(--navy-950)';
</script>

<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import HistoryIcon from '@lucide/svelte/icons/history';
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';
	import { cn } from '$lib/utils';

	let { formHref, riwayatHref }: { formHref: ResolvedPathname; riwayatHref: ResolvedPathname } =
		$props();

	const isRiwayat = $derived(page.url.pathname === riwayatHref);

	const base = tabBase;
	const active = tabActive;
	const idle = tabIdle;
</script>

<nav class={tabBar}>
	<a
		href={formHref}
		class={cn(base, 'cursor-pointer', isRiwayat ? idle : active)}
		aria-current={isRiwayat ? undefined : 'page'}
	>
		<FileTextIcon class="size-3.5" strokeWidth={2} />
		Form Pengajuan
	</a>
	<a
		href={riwayatHref}
		class={cn(base, 'cursor-pointer', isRiwayat ? active : idle)}
		aria-current={isRiwayat ? 'page' : undefined}
	>
		<HistoryIcon class="size-3.5" strokeWidth={2} />
		Riwayat Pengajuan
	</a>
</nav>
