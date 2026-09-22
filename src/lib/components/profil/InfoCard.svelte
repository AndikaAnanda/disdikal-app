<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import AwardIcon from '@lucide/svelte/icons/award';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import Building2Icon from '@lucide/svelte/icons/building-2';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import HeartIcon from '@lucide/svelte/icons/heart';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import LandmarkIcon from '@lucide/svelte/icons/landmark';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import MedalIcon from '@lucide/svelte/icons/medal';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import SchoolIcon from '@lucide/svelte/icons/school';
	import UserIcon from '@lucide/svelte/icons/user';
	import VenusAndMarsIcon from '@lucide/svelte/icons/venus-and-mars';
	import EditButton from './EditButton.svelte';
	import InfoField from './InfoField.svelte';
	import type { InfoFieldItem, ProfilIconId } from '$lib/profil-data';

	let {
		icon: Icon,
		title,
		fields
	}: { icon: LucideIcon; title: string; fields: InfoFieldItem[] } = $props();

	const icons: Record<ProfilIconId, LucideIcon> = {
		user: UserIcon,
		'id-card': IdCardIcon,
		calendar: CalendarIcon,
		medal: MedalIcon,
		gender: VenusAndMarsIcon,
		briefcase: BriefcaseIcon,
		landmark: LandmarkIcon,
		building: Building2Icon,
		heart: HeartIcon,
		'map-pin': MapPinIcon,
		mail: MailIcon,
		phone: PhoneIcon,
		graduation: GraduationCapIcon,
		school: SchoolIcon,
		book: BookOpenIcon,
		award: AwardIcon
	};
</script>

<section class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
	<div class="mb-1 flex items-center justify-between gap-3">
		<h2 class="flex items-center gap-2.5 text-[13.5px] font-semibold text-(--dash-text)">
			<Icon class="size-4 text-(--accent-blue)" strokeWidth={2} />
			{title}
		</h2>
		<EditButton />
	</div>

	<div class="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
		{#each fields as field (field.id)}
			<InfoField icon={icons[field.icon]} label={field.label} value={field.value} />
		{/each}
	</div>
</section>
