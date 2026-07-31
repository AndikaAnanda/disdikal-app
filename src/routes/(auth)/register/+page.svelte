<script lang="ts">
	import { defaults, setError, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { getErrorMessage, register } from '$lib/api';
	import RegisterBanner from '$lib/components/register/RegisterBanner.svelte';
	import RegisterFormCard from '$lib/components/register/RegisterFormCard.svelte';
	import RegisterSidebar from '$lib/components/register/RegisterSidebar.svelte';
	import { registerSchema } from '$lib/schemas/register';

	// unrepresentable: 'any' wajib — z.instanceof(File) tidak punya padanan di
	// JSON Schema dan adapter akan melempar error tanpa opsi ini.
	const adapter = zod4(registerSchema, { config: { unrepresentable: 'any' } });

	const superform = superForm(defaults(adapter), {
		SPA: true,
		validators: zod4Client(registerSchema),
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
		}
	});

	const { enhance } = superform;
</script>

<svelte:head><title>Layanan Disdikal — Pendaftaran Akun</title></svelte:head>

<!-- enctype tetap: form ini punya <input type="file"> (unggah foto), dan
     enhance melempar error sebelum submit kalau atribut ini tidak ada. -->
<form method="POST" enctype="multipart/form-data" use:enhance class="pb-12">
	<div class="grid items-start gap-6 max-lg:grid-cols-1 lg:grid-cols-[1.65fr_1fr] lg:gap-8">
		<div class="flex flex-col gap-6">
			<RegisterBanner />
			<RegisterFormCard {superform} />
		</div>
		<RegisterSidebar {superform} />
	</div>
</form>
