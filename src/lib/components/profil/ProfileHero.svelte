<script lang="ts">
	import CameraIcon from '@lucide/svelte/icons/camera';
	import ProfileHeroRing from './ProfileHeroRing.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import infoIcon from '$lib/assets/mdi_person-group.png';
	import type { ProfilHero } from '$lib/profil-data';

	let { hero }: { hero: ProfilHero } = $props();

	const info = $derived([
		{ id: 'nrp', label: 'NRP', value: hero.nrp },
		{ id: 'satker', label: 'Satker', value: hero.satker },
		{ id: 'prodi', label: 'Program Studi', value: hero.programStudi },
		{ id: 'gelar', label: 'Gelar yang Ditetapkan', value: hero.gelar }
	]);
</script>

<section
	class="profil-hero relative mb-4.5 flex min-h-52 w-full flex-col items-start justify-between gap-5 overflow-hidden rounded-[14px] px-5 py-5 text-white sm:px-7.5 sm:py-6.5 md:flex-row md:items-center"
>
	<div
		class="relative z-2 flex min-w-0 flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5.5"
	>
		<div class="relative shrink-0">
			<Avatar.Root
				class="size-24 border-[3px] border-white/65 shadow-[0_6px_18px_rgb(0_0_0/25%)] sm:size-32 lg:size-32.5"
			>
				<Avatar.Image src="https://github.com/shadcn.png" alt={hero.name} />
				<Avatar.Fallback>PN</Avatar.Fallback>
			</Avatar.Root>
			<span
				class="absolute right-0.5 bottom-0.5 flex size-8 items-center justify-center rounded-full border-[3px] border-[#0d2a63] bg-(--brand-500) text-white"
			>
				<CameraIcon class="size-3.5" />
			</span>
		</div>

		<div class="min-w-0">
			<Badge class="mb-2.5 border-white/35 bg-white/20 px-3.5 py-1 text-xs text-white">
				{hero.badgeLabel}
			</Badge>
			<p class="mb-3 text-base font-bold sm:text-lg lg:text-[20px]">{hero.name}</p>
			<!-- divide-x hanya dipakai saat satu baris; kalau membungkus, border kiri
			     muncul di awal tiap baris baru dan posisinya salah. -->
			<div
				class="mb-3 grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl bg-white/20 px-4 py-3 backdrop-blur-md lg:flex lg:flex-wrap lg:gap-0 lg:divide-x lg:divide-white/20"
			>
				{#each info as item (item.id)}
					<div class="flex min-w-0 items-center gap-1.5 text-[12.5px] lg:px-3">
						<span
							class="size-3.5 shrink-0 self-start bg-current mask-contain mask-center mask-no-repeat"
							style="mask-image: url({infoIcon})"
						></span>
						<span>
							<span class="block text-[11px]">{item.label}</span>
							<span class="font-bold">{item.value}</span>
						</span>
					</div>
				{/each}
			</div>
			<div class="flex flex-wrap items-center gap-2.5 text-[12.5px] font-medium">
				<span>Status Akun:</span>
				<Badge class="border-white/60 bg-(--accent-green-50) text-xs text-(--accent-green)">
					{hero.statusLabel}
				</Badge>
				<span class="text-[#cfe0ff]">{hero.verifDate}</span>
			</div>
		</div>
	</div>

	<ProfileHeroRing percent={hero.completionPct} />
</section>

<style>
	.profil-hero {
		--hero-bg-width: 126%;

		background-image:
			url('../../assets/bg/dashboard-profile-card-bg.png'),
			linear-gradient(115deg, #01296e 0%, #1a4694 55%, #2a5cb0 100%);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	@media (min-width: 48rem) {
		.profil-hero {
			background-position:
				left center,
				center;
			background-size:
				var(--hero-bg-width) auto,
				cover;
		}
	}
</style>
