<script lang="ts">
	import { defaults, setError, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { getErrorMessage, register } from '$lib/api';
	import bgRegister from '$lib/assets/bg/BG_Register.webp';
	import RegisterWizard, { FIELD_STEP } from '$lib/components/register/RegisterWizard.svelte';
	import { registerSchema } from '$lib/schemas/register';

	// unrepresentable: 'any' wajib — z.instanceof(File) tidak punya padanan di
	// JSON Schema dan adapter akan melempar error tanpa opsi ini.
	const adapter = zod4(registerSchema, { config: { unrepresentable: 'any' } });

	let step = $state(0);

	const superform = superForm(defaults(adapter), {
		SPA: true,
		validators: zod4Client(registerSchema),
		autoFocusOnError: false,
		onUpdate: async ({ form }) => {
			if (!form.valid) return;
			const { confirmPassword: _cp, ...payload } = form.data;
			try {
				await register(payload);
				await goto(resolve('/login'));
			} catch (err) {
				setError(form, 'kodeVerifikasi', getErrorMessage(err, 'Pendaftaran gagal. Coba lagi.'));
			}
		},
		onUpdated: ({ form }) => {
			if (form.valid) return;
			const steps = Object.keys(form.errors)
				.filter((key) => key in FIELD_STEP)
				.map((key) => FIELD_STEP[key]);
			if (steps.length) step = Math.min(...steps);
		}
	});

	const { enhance } = superform;
</script>

<svelte:head><title>Layanan Disdikal — Pendaftaran Akun</title></svelte:head>

<div
	class="relative flex flex-1 flex-col bg-(--auth-bg) bg-cover bg-center bg-no-repeat"
	style="background-image: url({bgRegister})"
>
	<div class="mx-auto w-full max-w-316 px-4 py-6 sm:py-8">
		<form method="POST" enctype="multipart/form-data" use:enhance>
			<RegisterWizard {superform} bind:step />
		</form>
	</div>
</div>
