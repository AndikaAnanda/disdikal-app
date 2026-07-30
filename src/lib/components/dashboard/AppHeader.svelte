<script lang="ts">
	import BellIcon from '@lucide/svelte/icons/bell';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import MailIcon from '@lucide/svelte/icons/mail';
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import logoDisdikal from '$lib/assets/logo-disdikal.png';
	import type { UserProfile } from '$lib/dashboard-data';

	let { user }: { user: UserProfile } = $props();
</script>

<header class="bg-[#01296E] px-4 py-3 text-white sm:px-6 sm:py-4 lg:px-12.5 lg:py-5">
	<div class="mx-auto flex max-w-[1880px] items-center justify-between gap-3 sm:gap-6 lg:px-5">
		<div class="flex min-w-0 items-center gap-2.5">
			<img
				src={logoDisdikal}
				alt="Logo Dinas Pendidikan TNI AL"
				class="size-8 shrink-0 object-contain sm:size-10"
			/>
			<div class="min-w-0">
				<p class="hidden text-[12px] tracking-[0.03em] text-white sm:block">
					MARKAS BESAR ANGKATAN LAUT
				</p>
				<p class="truncate text-sm font-extrabold tracking-tight sm:text-base lg:text-[20px]">
					DINAS PENDIDIKAN
				</p>
			</div>
		</div>

		<div class="hidden min-w-0 flex-1 items-center gap-6.5 text-[14px] text-white lg:flex">
			<span class="flex min-w-0 items-center gap-2">
				<MailIcon class="size-4 shrink-0" /><span class="truncate">{user.email}</span>
			</span>
			<span class="flex shrink-0 items-center gap-2">
				<ClockIcon class="size-4" />{user.workingHours}
			</span>
		</div>

		<div class="flex shrink-0 items-center gap-3 sm:gap-5.5">
			<div class="relative text-white">
				<BellIcon class="size-6 sm:size-7.5" />
				<Badge
					class="absolute -top-1.5 -right-1.5 size-4 border-2 border-(--navy-950) bg-(--accent-red) p-0 text-[10px] font-bold text-white"
				>
					{user.unreadCount}
				</Badge>
			</div>
			<div class="flex items-center gap-2.5">
				<Avatar.Root class="size-8 sm:size-8.75">
					<Avatar.Image src="https://github.com/shadcn.png" alt={user.shortName} />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div class="hidden sm:block">
					<p class="text-sm leading-tight font-bold lg:text-[16px]">{user.shortName}</p>
					<p class="text-xs text-white lg:text-[14px]">{user.role}</p>
				</div>
				<ChevronDownIcon class="hidden size-5 text-white sm:block" />
			</div>
			<form method="POST" action={resolve('/logout')} use:enhance class="flex">
				<button type="submit" aria-label="Keluar" class="text-white/80 hover:text-white">
					<LogOutIcon class="size-4.5 sm:size-5" />
				</button>
			</form>
		</div>
	</div>
</header>
