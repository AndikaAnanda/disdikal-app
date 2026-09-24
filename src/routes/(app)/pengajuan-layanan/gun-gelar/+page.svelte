<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import GunGelarWizard, { FIELD_STEP } from '$lib/components/gun-gelar/GunGelarWizard.svelte';
	import { gunGelarSchema } from '$lib/schemas/gun-gelar';

	const adapter = zod4(gunGelarSchema, { config: { unrepresentable: 'any' } });

	let step = $state(0);

	const superform = superForm(defaults(adapter), {
		SPA: true,
		validators: zod4Client(gunGelarSchema),
		autoFocusOnError: false,
		onUpdate: async ({ form }) => {
			if (!form.valid) return;
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

<svelte:head><title>Layanan Disdikal — Pengajuan Gun Gelar</title></svelte:head>

<form method="POST" enctype="multipart/form-data" use:enhance>
	<GunGelarWizard {superform} bind:step />
</form>
