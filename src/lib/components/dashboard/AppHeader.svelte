<script lang="ts">
	import BellIcon from '@lucide/svelte/icons/bell';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import MailIcon from '@lucide/svelte/icons/mail';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import logoDisdikal from '$lib/assets/logo-disdikal.png';
	import type { UserProfile } from '$lib/dashboard-data';

	let { user }: { user: UserProfile } = $props();
</script>

<header class="bg-[#01296E] px-12.5 py-5 text-white">
	<div class="mx-auto flex max-w-[1880px] items-center justify-between gap-6 px-5">
		<div class="flex shrink-0 items-center gap-2.5">
			<img src={logoDisdikal} alt="Logo Dinas Pendidikan TNI AL" class="size-10 object-contain" />
			<div>
				<p class="text-[12px] tracking-[0.03em] text-white">MARKAS BESAR ANGKATAN LAUT</p>
				<p class="text-[20px] font-extrabold tracking-tight">DINAS PENDIDIKAN</p>
			</div>
		</div>

		<div class="hidden flex-1 items-center gap-6.5 text-[14px] text-white lg:flex">
			<span class="flex items-center gap-2">
				<MailIcon class="size-4" />{user.email}
			</span>
			<span class="flex items-center gap-2">
				<ClockIcon class="size-4" />{user.workingHours}
			</span>
		</div>

		<div class="flex shrink-0 items-center gap-5.5">
			<div class="relative text-white">
				<BellIcon class="size-7.5" />
				<Badge
					class="absolute -top-1.5 -right-1.5 size-4 border-2 border-(--navy-950) bg-(--accent-red) p-0 text-[10px] font-bold text-white"
				>
					{user.unreadCount}
				</Badge>
			</div>
			<div class="flex items-center gap-2.5">
				<Avatar.Root class="size-8.75">
					<Avatar.Image src="https://github.com/shadcn.png" alt={user.shortName} />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div>
					<p class="text-[16px] leading-tight font-bold">{user.shortName}</p>
					<p class="text-[14px] text-white">{user.role}</p>
				</div>
				<ChevronDownIcon class="size-5 text-white" />
			</div>
		</div>
	</div>
</header>
