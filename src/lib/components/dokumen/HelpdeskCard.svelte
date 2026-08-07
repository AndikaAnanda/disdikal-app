<script lang="ts">
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconMail, iconPhone, iconService } from './icons';
	import type { Helpdesk } from '$lib/dokumen-data';

	let { data }: { data: Helpdesk } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconService} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">
			Pusat Bantuan &amp; Tutorial (Helpdesk)
		</h2>
	</div>

	<div class="flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] text-[#343434]">
		<span class="flex items-center gap-2.5">
			<MaskIcon src={iconPhone} class="size-4 text-(--brand-600)" />
			{data.phone}
		</span>
		<span class="flex min-w-0 items-center gap-2.5">
			<MaskIcon src={iconMail} class="size-4 text-(--brand-600)" />
			<span class="truncate">{data.email}</span>
		</span>
	</div>
</div>
