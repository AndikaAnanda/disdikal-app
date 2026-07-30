<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import RegisterBanner from '$lib/components/register/RegisterBanner.svelte';
	import RegisterFormCard from '$lib/components/register/RegisterFormCard.svelte';
	import RegisterSidebar from '$lib/components/register/RegisterSidebar.svelte';
	import { registerSchema } from '$lib/schemas/register';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const superform = superForm(data.form, { validators: zod4Client(registerSchema) });
	const { enhance } = superform;
</script>

<svelte:head><title>Layanan Disdikal — Pendaftaran Akun</title></svelte:head>

<!-- enctype wajib: form ini punya <input type="file"> (unggah foto), dan
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
