<script lang="ts">
	import BellIcon from '@lucide/svelte/icons/bell';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import MailIcon from '@lucide/svelte/icons/mail';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import UsersIcon from '@lucide/svelte/icons/users';
	import { DropdownMenu } from 'bits-ui';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { logout } from '$lib/api';
	import * as Avatar from '$lib/components/ui/avatar';
	import logoDisdikal from '$lib/assets/logo-disdikal.png';
	import type { UserProfile } from '$lib/dashboard-data';

	let { user }: { user: UserProfile } = $props();

	async function onLogout() {
		// Selalu membersihkan sesi lokal, walau panggilan ke backend gagal.
		await logout();
		goto(resolve('/login'));
	}

	const menuItem =
		'flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#55709E] outline-none select-none transition-colors duration-150 hover:bg-(--accent-blue-50) hover:text-(--navy-950) data-highlighted:bg-(--accent-blue-50) data-highlighted:text-(--navy-950) data-disabled:pointer-events-none data-disabled:opacity-60';
</script>

<header
	class="border-b-2 border-(--dash-accent) bg-(--navy-950) px-4 py-2.5 text-white sm:px-6 lg:px-12.5 lg:py-3"
>
	<div class="mx-auto flex max-w-[1880px] items-center justify-between gap-3 sm:gap-6 lg:px-5">
		<div class="flex min-w-0 items-center">
			<div class="flex min-w-0 items-center gap-2.5">
				<img
					src={logoDisdikal}
					alt="Logo Dinas Pendidikan TNI AL"
					class="size-8 shrink-0 object-contain sm:size-10"
				/>
				<div class="min-w-0">
					<p class="hidden text-[10.5px] tracking-[1.3px] text-white/85 sm:block">
						MARKAS BESAR ANGKATAN LAUT
					</p>
					<p class="truncate text-sm leading-tight font-bold sm:text-[16px] lg:text-[18px]">
						DINAS PENDIDIKAN
					</p>
				</div>
			</div>

			<div
				class="ml-5 hidden min-w-0 items-center gap-5 border-l border-white/20 pl-5 text-[11.5px] text-white/90 lg:flex"
			>
				<span class="flex min-w-0 items-center gap-1.5">
					<MailIcon class="size-3.5 shrink-0" strokeWidth={1.9} />
					<span class="truncate">{user.email}</span>
				</span>
				<span class="flex shrink-0 items-center gap-1.5">
					<ClockIcon class="size-3.5" strokeWidth={1.9} />{user.workingHours}
				</span>
			</div>
		</div>

		<div class="flex shrink-0 items-center gap-3 sm:gap-5">
			<button
				type="button"
				aria-label="{user.unreadCount} notifikasi belum dibaca"
				aria-disabled="true"
				class="relative flex cursor-pointer text-white hover:text-white/80"
			>
				<BellIcon class="size-5 sm:size-5.5" strokeWidth={1.9} />
				{#if user.unreadCount > 0}
					<span
						class="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-(--accent-red) ring-2 ring-(--navy-950)"
					></span>
				{/if}
			</button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					class="flex cursor-pointer items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-white/40"
				>
					<Avatar.Root class="size-8.5 border border-white/40">
						<Avatar.Image src="https://github.com/shadcn.png" alt={user.shortName} />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
					<div class="hidden text-left sm:block">
						<p class="text-[13px] leading-tight font-semibold">{user.shortName}</p>
						<p class="text-[11px] text-white/70">{user.role}</p>
					</div>
					<ChevronDownIcon class="hidden size-4 text-white sm:block" strokeWidth={2} />
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenu.Content
						align="end"
						sideOffset={10}
						class="dashboard-shell z-50 w-62 origin-(--bits-dropdown-menu-content-transform-origin) rounded-xl bg-white/60 p-2 text-(--dash-text) shadow-[0_12px_32px_rgba(11,30,74,0.18)] backdrop-blur-sm  duration-200 outline-none data-[side=bottom]:slide-in-from-top-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
					>
						<div class="flex items-center gap-3 px-2.5 py-2">
							<Avatar.Root class="size-10">
								<Avatar.Image src="https://github.com/shadcn.png" alt={user.shortName} />
								<Avatar.Fallback>CN</Avatar.Fallback>
							</Avatar.Root>
							<div class="min-w-0">
								<p class="truncate text-[14px] font-bold text-(--navy-950)">{user.shortName}</p>
								<p class="text-[12px] text-(--dash-muted)">{user.role}</p>
							</div>
						</div>

						<div class="ml-1 flex flex-col gap-0.5 border-l-2 border-(--accent-blue) pl-1.5">
							<DropdownMenu.Item class={menuItem} onSelect={() => goto(resolve('/profil'))}>
								<UsersIcon class="size-4.5 text-(--brand-500)" strokeWidth={1.9} />
								Profile
							</DropdownMenu.Item>
							<DropdownMenu.Item class={menuItem} disabled>
								<SettingsIcon class="size-4.5 text-(--brand-500)" strokeWidth={1.9} />
								Setting
							</DropdownMenu.Item>
							<DropdownMenu.Item class={menuItem} onSelect={onLogout}>
								<LogOutIcon class="size-4.5 text-(--brand-500)" strokeWidth={1.9} />
								Sign Out
							</DropdownMenu.Item>
						</div>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
