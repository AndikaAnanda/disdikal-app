<script lang="ts">
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import CameraIcon from '@lucide/svelte/icons/camera';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import MedalIcon from '@lucide/svelte/icons/medal';
	import heroBg from '$lib/assets/bg/card-dashboard.png';
	import CompletionRing from '$lib/components/shared/CompletionRing.svelte';
	import HeroInfoRow from '$lib/components/shared/HeroInfoRow.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import type { ProfilHero } from '$lib/profil-data';

	let { hero }: { hero: ProfilHero } = $props();

	const info = $derived([
		{ id: 'nrp', icon: IdCardIcon, label: 'NRP', value: hero.nrp },
		{ id: 'pangkat', icon: MedalIcon, label: 'Pangkat', value: hero.pangkat },
		{ id: 'satker', icon: BriefcaseIcon, label: 'Satuan Kerja', value: hero.satker },
		{
			id: 'pendidikan',
			icon: GraduationCapIcon,
			label: 'Pendidikan Terakhir',
			value: hero.pendidikanTerakhir
		}
	]);
</script>

<section
	class="relative flex flex-col gap-5 overflow-hidden rounded-[10px] bg-(--navy-950) bg-cover bg-right bg-no-repeat px-5 py-5 text-white before:absolute before:inset-0 before:bg-linear-to-r before:from-(--navy-950)/75 before:to-transparent sm:px-6 md:flex-row md:items-center md:before:hidden"
	style="background-image: url({heroBg})"
>
	<div class="relative shrink-0 self-start md:self-center">
		<Avatar.Root class="size-28 border-[3px] border-white/70 lg:size-34">
			<Avatar.Image src="https://github.com/shadcn.png" alt={hero.name} />
			<Avatar.Fallback>PN</Avatar.Fallback>
		</Avatar.Root>
		<span
			class="absolute right-1 bottom-1 flex size-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-(--accent-blue) text-white"
			aria-disabled="true"
		>
			<CameraIcon class="size-3.5" strokeWidth={2} />
		</span>
	</div>

	<div class="relative flex min-w-0 flex-1 flex-col gap-3">
		<div>
			<Badge
				class="rounded-full border-white/70 bg-white px-3 py-0.5 text-[10.5px] font-medium text-(--navy-950) sm:text-[11px]	"
			>
				{hero.badgeLabel}
			</Badge>
			<p class="mt-1.5 text-[15px] font-bold sm:text-[16px]">{hero.name}</p>
		</div>

		<HeroInfoRow items={info} />

		<div class="flex flex-wrap items-center gap-3 text-[11px] text-white/90">
			<span class="flex items-center gap-2">
				Status Akun:
				<Badge
					class="gap-1 rounded-full border-transparent bg-(--accent-green-50) px-2 py-0.5 text-[10px] font-semibold text-(--accent-green)"
				>
					<CircleCheckIcon class="size-3" strokeWidth={2.2} />
					{hero.statusLabel}
				</Badge>
			</span>
			<span class="border-l border-white/30 pl-3">Tanggal Verifikasi: {hero.verifDate}</span>
		</div>
	</div>

	<CompletionRing
		percent={hero.completionPct}
		fill="var(--accent-green)"
		track="rgba(255,255,255,0.25)"
		class="relative size-26 self-start md:self-center"
		innerClass="size-23 bg-(--navy-950)/70 gap-0.5"
	>
		<span class="text-[22px] leading-none">{hero.completionPct}%</span>
		<span class="text-[11px] text-white/90">Kelengkapan</span>
	</CompletionRing>
</section>
