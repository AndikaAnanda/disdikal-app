<script lang="ts">
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';

	let { tips }: { tips: string[] } = $props();
</script>

<aside class="rounded-[10px] border border-(--dash-border) bg-white p-3.5">
	<div class="flex h-32 items-center justify-center rounded-lg bg-(--accent-blue-50)">
		<ShieldCheckIcon class="size-12 text-(--accent-blue)" strokeWidth={1.6} />
	</div>
	<h3 class="mt-4 flex items-center gap-2 text-[11.5px] font-semibold text-(--dash-text)">
		<ShieldIcon class="size-3.5 text-(--accent-blue)" strokeWidth={2} />
		Tips Keamanan Kata Sandi
	</h3>
	<ul class="mt-2.5 flex flex-col gap-2">
		{#each tips as tip (tip)}
			<li class="flex items-start gap-2 text-[10.5px] text-(--dash-muted)">
				<CircleCheckIcon class="mt-px size-3.5 shrink-0 text-(--accent-green)" strokeWidth={2.2} />
				{tip}
			</li>
		{/each}
	</ul>
</aside>
