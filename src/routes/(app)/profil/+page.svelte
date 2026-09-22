<script lang="ts">
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import UserIcon from '@lucide/svelte/icons/user';
	import InfoCard from '$lib/components/profil/InfoCard.svelte';
	import ProfileHero from '$lib/components/profil/ProfileHero.svelte';
	import { educationFields, personalFields, profilHero } from '$lib/profil-data';
</script>

<svelte:head><title>Layanan Disdikal — Profil Saya</title></svelte:head>

<div class="flex flex-col gap-3.5">
	<ProfileHero hero={profilHero} />
	<InfoCard icon={UserIcon} title="Personal Informasi" fields={personalFields} />
	<InfoCard icon={GraduationCapIcon} title="Data Pendidikan" fields={educationFields} />
</div>
