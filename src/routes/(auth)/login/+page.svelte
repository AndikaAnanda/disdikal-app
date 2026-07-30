<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import HeroPanel from '$lib/components/login/HeroPanel.svelte';
	import LoginCard from '$lib/components/login/LoginCard.svelte';
	import { loginSchema } from '$lib/schemas/login';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const superform = superForm(data.form, { validators: zod4Client(loginSchema) });
</script>

<svelte:head><title>Layanan Disdikal — Login</title></svelte:head>

<div class="grid items-start gap-6 max-lg:grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
	<div class="order-2 lg:order-1"><HeroPanel /></div>
	<div class="order-1 lg:order-2"><LoginCard {superform} /></div>
</div>
