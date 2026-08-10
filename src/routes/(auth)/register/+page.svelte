<script lang="ts">
	import { defaults, setError, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { getErrorMessage, register } from '$lib/api';
	import RegisterWizard, { FIELD_STEP } from '$lib/components/register/RegisterWizard.svelte';
	import { registerSchema } from '$lib/schemas/register';

	// unrepresentable: 'any' wajib — z.instanceof(File) tidak punya padanan di
	// JSON Schema dan adapter akan melempar error tanpa opsi ini.
	const adapter = zod4(registerSchema, { config: { unrepresentable: 'any' } });

	let step = $state(0);

	const superform = superForm(defaults(adapter), {
		SPA: true,
		validators: zod4Client(registerSchema),
		// Field yang error bisa berada di step yang sedang tidak dirender, jadi
		// fokus otomatis dimatikan dan navigasinya diurus onUpdated di bawah.
		autoFocusOnError: false,
		onUpdate: async ({ form }) => {
			if (!form.valid) return;
			// confirmPassword dan agreement hanya gate submit-time, bukan payload API.
			const { confirmPassword: _cp, agreement: _ag, ...payload } = form.data;
			try {
				await register(payload);
				await goto(resolve('/login'));
			} catch (err) {
				setError(form, 'email', getErrorMessage(err, 'Pendaftaran gagal. Coba lagi.'));
			}
		},
		onUpdated: ({ form }) => {
			if (form.valid) return;
			const steps = Object.keys(form.errors)
				.filter((key) => key in FIELD_STEP)
				.map((key) => FIELD_STEP[key]);
			// Step terendah dipilih supaya user memperbaiki dari yang paling awal.
			if (steps.length) step = Math.min(...steps);
		}
	});

	const { enhance } = superform;
</script>

<svelte:head><title>Layanan Disdikal — Pendaftaran Akun</title></svelte:head>

<!-- enctype tetap: form ini punya <input type="file"> (unggah foto), dan
     enhance melempar error sebelum submit kalau atribut ini tidak ada. -->
<form method="POST" enctype="multipart/form-data" use:enhance>
	<RegisterWizard {superform} bind:step />
</form>
