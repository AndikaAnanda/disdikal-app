<script lang="ts">
	import { defaults, setError, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { getErrorMessage, login } from '$lib/api';
	import HeroPanel from '$lib/components/login/HeroPanel.svelte';
	import LoginCard from '$lib/components/login/LoginCard.svelte';
	import { loginSchema } from '$lib/schemas/login';
	import { AuthStore } from '$lib/stores';

	// SPA mode: tidak ada form action, state awal dibuat di klien lewat defaults().
	const superform = superForm(defaults(zod4(loginSchema)), {
		SPA: true,
		validators: zod4Client(loginSchema),
		onUpdate: async ({ form }) => {
			if (!form.valid) return;
			try {
				const res = await login({ email: form.data.email, password: form.data.password });
				AuthStore.setSession(res.accessToken, res.refreshToken, res.user);
				await goto(resolve('/'));
			} catch (err) {
				// Pesan generik di field password saja, supaya tidak membocorkan
				// apakah email-nya terdaftar.
				setError(form, 'password', getErrorMessage(err, 'Email atau password salah'));
			}
		}
	});
</script>

<svelte:head><title>Layanan Disdikal — Login</title></svelte:head>

<div class="grid items-start gap-6 max-lg:grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
	<div class="order-2 lg:order-1"><HeroPanel /></div>
	<div class="order-1 lg:order-2"><LoginCard {superform} /></div>
</div>
