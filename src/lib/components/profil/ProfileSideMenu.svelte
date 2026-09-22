<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import LockIcon from '@lucide/svelte/icons/lock';
	import UserIcon from '@lucide/svelte/icons/user';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils';

	const profil = resolve('/profil');
	const dokumen = resolve('/profil/dokumen');
	const pribadi = resolve('/profil/dokumen/pribadi');
	const pendidikan = resolve('/profil/dokumen/pendidikan');
	const dinas = resolve('/profil/dokumen/dinas');
	const kataSandi = resolve('/profil/kata-sandi');

	const pathname = $derived(page.url.pathname);
	const isDokumen = $derived(pathname.startsWith(dokumen));

	const item =
		'flex shrink-0 cursor-pointer items-center gap-2.5 rounded-lg border-l-2 border-transparent px-3 py-2.5 text-[11.5px] font-medium whitespace-nowrap transition-colors';
	const itemActive = 'border-(--accent-blue) bg-(--accent-blue-50) text-(--navy-950)';
	const itemIdle = 'text-[#9aa2b1] hover:bg-(--brand-50) hover:text-(--navy-950)';

	const sub =
		'flex shrink-0 cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-[11px] whitespace-nowrap transition-colors';
	const subActive = 'bg-(--accent-blue-50) text-(--accent-blue) font-medium';
	const subIdle = 'text-[#9aa2b1] hover:text-(--navy-950)';
	const dot = 'size-1.5 shrink-0 rounded-full';

	const subLinks = [
		{ href: pribadi, label: 'Dokumen Pribadi' },
		{ href: pendidikan, label: 'Dokumen Pendidikan' },
		{ href: dinas, label: 'Dokumen Dinas' }
	];
</script>

<nav
	class="flex gap-1 overflow-x-auto rounded-[10px] border border-(--dash-border) bg-white p-2.5 md:flex-col md:overflow-visible"
>
	<a
		href={profil}
		class={cn(item, pathname === profil ? itemActive : itemIdle)}
		aria-current={pathname === profil ? 'page' : undefined}
	>
		<UserIcon class="size-3.5" strokeWidth={2} />
		Data Profil
	</a>

	<div class="flex shrink-0 gap-1 md:flex-col">
		<a
			href={pribadi}
			class={cn(item, isDokumen ? itemActive : itemIdle)}
			aria-current={isDokumen ? 'page' : undefined}
		>
			<FileTextIcon class="size-3.5" strokeWidth={2} />
			Dokumen
		</a>
		{#if isDokumen}
			<div class="flex gap-0.5 md:ml-6 md:flex-col">
				{#each subLinks as link (link.href)}
					{@const active = pathname === link.href}
					<a
						href={link.href}
						class={cn(sub, active ? subActive : subIdle)}
						aria-current={active ? 'page' : undefined}
					>
						<span class={cn(dot, active ? 'bg-(--accent-blue)' : 'border border-[#c7d2e3]')}></span>
						{link.label}
					</a>
				{/each}
			</div>
		{/if}
	</div>

	<a
		href={kataSandi}
		class={cn(item, pathname === kataSandi ? itemActive : itemIdle)}
		aria-current={pathname === kataSandi ? 'page' : undefined}
	>
		<LockIcon class="size-3.5" strokeWidth={2} />
		Ubah Kata Sandi
	</a>

	<!-- <span class={cn(item, itemIdle)} aria-disabled="true">
		<Trash2Icon class="size-3.5" strokeWidth={2} />
		Delete Account
	</span> -->
</nav>
