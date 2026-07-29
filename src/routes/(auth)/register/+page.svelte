<script lang="ts">
	import { enhance } from '$app/forms';
	import RegisterBanner from '$lib/components/register/RegisterBanner.svelte';
	import RegisterFormCard from '$lib/components/register/RegisterFormCard.svelte';
	import RegisterSidebar from '$lib/components/register/RegisterSidebar.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<svelte:head><title>Layanan Disdikal — Pendaftaran Akun</title></svelte:head>

<form method="POST" use:enhance class="pb-12">
	<div class="grid items-start gap-6 max-[1080px]:grid-cols-1 min-[1081px]:grid-cols-[1.65fr_1fr]">
		<div class="flex flex-col gap-6">
			<RegisterBanner />
			<RegisterFormCard {form} />
		</div>
		<RegisterSidebar {form} />
	</div>
</form>
