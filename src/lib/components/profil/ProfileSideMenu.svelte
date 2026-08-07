<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';

	const itemBase = 'block rounded-[10px] px-3.5 py-3 text-sm font-semibold';
	const itemIdle = 'text-[#55607a] hover:bg-(--brand-50) hover:text-(--brand-600)';
	const itemActive = 'bg-(--brand-50) text-(--brand-600)';

	const links = [
		{ id: 'profil', label: 'Data Profil', href: resolve('/profil') },
		{ id: 'dokumen', label: 'Dokumen', href: resolve('/dokumen') }
	];
</script>

<nav class="rounded-[14px] border border-(--dash-border) bg-white p-3.5">
	{#each links as link (link.id)}
		{@const active = page.url.pathname === link.href}
		<a
			href={link.href}
			class={cn(itemBase, 'mb-1', active ? itemActive : itemIdle)}
			aria-current={active ? 'page' : undefined}
		>
			{link.label}
		</a>
	{/each}
	<span class="{itemBase} cursor-default text-(--accent-red) opacity-60" aria-disabled="true">
		Delete Account
	</span>
</nav>
