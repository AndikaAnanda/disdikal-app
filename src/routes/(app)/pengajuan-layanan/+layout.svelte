<script lang="ts">
	import PengajuanSideMenu from '$lib/components/pengajuan/PengajuanSideMenu.svelte';

	let { children } = $props();
</script>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div class="grid grid-cols-1 items-start gap-3.5 md:grid-cols-[240px_1fr]">
		<PengajuanSideMenu />
		<div class="min-w-0">{@render children()}</div>
	</div>
</div>
