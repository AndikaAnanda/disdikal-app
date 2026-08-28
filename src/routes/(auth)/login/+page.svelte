<script lang="ts">
	import { defaults, setError, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { getErrorMessage, login } from '$lib/api';
	import loginBg from '$lib/assets/bg/login-bg.png';
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

<!-- Band full-bleed: ilustrasi dipasang sebagai <img> ber-object-position, bukan
     background-image, supaya titik crop-nya bisa diatur tanpa rule scoped. -->
<div
	class="relative grid flex-1 grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center gap-6.5 bg-(--auth-band-bg) px-[clamp(18px,3vw,48px)] py-[clamp(18px,2.4vw,34px)]"
>
	<img
		src={loginBg}
		alt=""
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 size-full object-cover object-[center_45%]"
	/>
	<div class="relative z-1 self-start"><HeroPanel /></div>
	<div class="relative z-1 flex items-center justify-end self-stretch">
		<LoginCard {superform} />
	</div>
</div>
