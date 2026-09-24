<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import DataDikForm from '$lib/components/data-dik/DataDikForm.svelte';
	import { personelRecords } from '$lib/data-dik-data';
	import { dataDikSchema } from '$lib/schemas/data-dik';

	const adapter = zod4(dataDikSchema, { config: { unrepresentable: 'any' } });

	const superform = superForm(defaults({ personelId: personelRecords[0].id }, adapter), {
		SPA: true,
		validators: zod4Client(dataDikSchema),
		autoFocusOnError: false,
		onUpdate: async ({ form }) => {
			if (!form.valid) return;
		}
	});

	const { enhance } = superform;
</script>

<svelte:head><title>Layanan Disdikal — Pengajuan Update Data Dik</title></svelte:head>

<form method="POST" enctype="multipart/form-data" use:enhance>
	<DataDikForm {superform} />
</form>
