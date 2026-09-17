<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import MedalIcon from '@lucide/svelte/icons/medal';
	import { Progress } from 'bits-ui';
	import { resolve } from '$app/paths';
	import heroBg from '$lib/assets/bg/card-dashboard.png';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import type { UserProfile } from '$lib/dashboard-data';

	let { user }: { user: UserProfile } = $props();

	const info = $derived([
		{ id: 'nrp', icon: IdCardIcon, label: 'NRP', value: user.nrp },
		{ id: 'pangkat', icon: MedalIcon, label: 'Pangkat', value: user.pangkat },
		{ id: 'satker', icon: BriefcaseIcon, label: 'Satuan Kerja', value: user.satker },
		{
			id: 'pendidikan',
			icon: GraduationCapIcon,
			label: 'Pendidikan Terakhir',
			value: user.pendidikanTerakhir
		}
	]);
</script>

<section
	class="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-[10px] bg-(--navy-950) bg-cover bg-right bg-no-repeat px-5 py-4.5 text-white before:absolute before:inset-0 before:bg-linear-to-r before:from-(--navy-950)/75 before:to-transparent sm:px-6 md:before:hidden"
	style="background-image: url({heroBg})"
>
	<div class="relative flex items-center gap-3">
		<Avatar.Root class="size-10 shrink-0 border-2 border-white/70">
			<Avatar.Image src="https://github.com/shadcn.png" alt={user.name} />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<div class="min-w-0">
			<p class="text-[12px] text-white/90">Selamat Datang</p>
			<p class="truncate text-[15px] font-bold sm:text-[16px]">{user.name}</p>
		</div>
	</div>

	<div
		class="relative grid grid-cols-2 gap-x-4 gap-y-2.5 rounded-lg bg-white/10 px-3 py-2.5 backdrop-blur-sm lg:flex lg:gap-0 lg:divide-x lg:divide-white/15"
	>
		{#each info as item (item.id)}
			{@const Icon = item.icon}
			<div class="flex min-w-0 items-start gap-2 lg:flex-1 lg:px-4 lg:first:pl-1 lg:last:pr-1">
				<Icon class="mt-0.5 size-3.5 shrink-0 text-white/80" strokeWidth={1.9} />
				<div class="min-w-0">
					<p class="text-[10.5px] text-white/80">{item.label}</p>
					<p class="truncate text-[12px] font-bold">{item.value}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="relative flex flex-col items-start gap-2.5">
		<p class="text-[12px] font-semibold text-white">
			Kelengkapan Profil · {user.profileRemaining}
		</p>
		<Progress.Root
			value={user.profileCompletionPct}
			max={100}
			aria-label="Kelengkapan profil"
			class="h-1 w-full overflow-hidden rounded-full bg-white/25"
		>
			<span
				class="block h-full rounded-full bg-(--dash-accent)"
				style="width: {user.profileCompletionPct}%"
			></span>
		</Progress.Root>
		<Button
			href={resolve('/profil')}
			class="h-auto cursor-pointer gap-1.5 rounded-md bg-white px-3 py-1.5 text-[11px] font-semibold text-(--navy-950) hover:bg-(--brand-50) hover:text-(--navy-950)"
		>
			Lengkapi Profile
			<ArrowRightIcon class="size-3.25" strokeWidth={2.2} />
		</Button>
	</div>
</section>
