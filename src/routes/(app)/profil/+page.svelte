<script lang="ts">
	import DocumentsCard from '$lib/components/profil/DocumentsCard.svelte';
	import EducationInfoCard from '$lib/components/profil/EducationInfoCard.svelte';
	import PersonalInfoCard from '$lib/components/profil/PersonalInfoCard.svelte';
	import ProfileHero from '$lib/components/profil/ProfileHero.svelte';
	import ProfileSideMenu from '$lib/components/profil/ProfileSideMenu.svelte';
	import { documentItems, educationInfo, personalInfo, profilHero } from '$lib/profil-data';
</script>

<svelte:head><title>Layanan Disdikal — Profil Saya</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div class="grid grid-cols-1 items-start gap-4.5 md:grid-cols-[220px_1fr]">
		<ProfileSideMenu />

		<div class="min-w-0">
			<ProfileHero hero={profilHero} />

			<div class="mb-4.5 grid grid-cols-1 gap-4.5 min-[1600px]:grid-cols-2">
				<PersonalInfoCard info={personalInfo} />
				<EducationInfoCard info={educationInfo} />
			</div>

			<DocumentsCard items={documentItems} />
		</div>
	</div>
</div>
