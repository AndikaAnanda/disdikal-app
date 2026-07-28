<script lang="ts">
	import ProfileCompletionRing from './ProfileCompletionRing.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import infoIcon from '$lib/assets/mdi_person-group.png';
	import type { UserProfile } from '$lib/dashboard-data';

	let { user }: { user: UserProfile } = $props();

	const info = $derived([
		{ id: 'nrp', label: 'NRP', value: user.nrp },
		{ id: 'satker', label: 'Satker', value: user.satker },
		{ id: 'prodi', label: 'Program Studi', value: user.programStudi },
		{ id: 'gelar', label: 'Gelar yang Ditetapkan', value: user.gelar }
	]);
</script>

<section
	class="hero-card relative flex min-h-44 flex-col items-start justify-between gap-5 overflow-hidden rounded-[14px] px-7.5 py-6.5 text-white md:flex-row md:items-center"
>
	<div class="relative z-2 flex items-center gap-5.5">
		<Avatar.Root class="size-37.5 border-[3px] border-white/65 shadow-[0_6px_18px_rgb(0_0_0/25%)]">
			<Avatar.Image src="https://github.com/shadcn.png" alt={user.name} />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>

		<div>
			<p class="mb-0.5 text-[14px] font-bold text-white">Selamat Datang,</p>
			<p class="mb-3 text-[20px] font-bold">{user.name}!</p>
			<div
				class="mb-3 flex flex-wrap divide-x divide-white/20 rounded-xl bg-white/20 px-4 py-3 backdrop-blur-md"
			>
				{#each info as item (item.id)}
					<div class="flex items-center gap-1.5 px-3 text-[12.5px]">
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
			<div class="flex items-center gap-2.5 text-[14px] font-medium">
				<span>Status Pengajuan:</span>
				<Badge class="border-white/60 bg-white/95 text-xs text-(--accent-green)">
					{user.statusLabel}
				</Badge>
			</div>
			<p class="mt-2.5 text-[12px] font-bold text-white">Last Login: {user.lastLogin}</p>
		</div>
	</div>

	<ProfileCompletionRing percent={user.profileCompletionPct} remaining={user.profileRemaining} />
</section>

<style>
	.hero-card {
		--hero-bg-width: 126%;

		background-image:
			url('../../assets/bg/dashboard-profile-card-bg.png'),
			linear-gradient(115deg, #01296e 0%, #1a4694 55%, #2a5cb0 100%);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	@media (min-width: 48rem) {
		.hero-card {
			background-position:
				left center,
				center;
			background-size:
				var(--hero-bg-width) auto,
				cover;
		}
	}
</style>
