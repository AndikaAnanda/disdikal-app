<script lang="ts">
	import HeroPanel from '$lib/components/login/HeroPanel.svelte';
	import LoginCard from '$lib/components/login/LoginCard.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<svelte:head><title>Layanan Disdikal — Login</title></svelte:head>

<div class="grid items-start gap-10 max-lg:grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
	<HeroPanel />
	<LoginCard {form} />
</div>
