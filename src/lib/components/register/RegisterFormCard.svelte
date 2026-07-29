<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import DataDiriSection from './DataDiriSection.svelte';
	import InformasiAkunSection from './InformasiAkunSection.svelte';

	type RegisterForm = {
		values?: Record<string, string>;
		errors?: Record<string, string[]>;
	} | null;

	let { form }: { form: RegisterForm } = $props();
</script>

<Card.Root class="bg-transparent p-0 text-[#01296E] shadow-none ring-0">
	<Card.Content class="flex flex-col gap-5 p-0">
		<DataDiriSection {form} />
		<InformasiAkunSection {form} />
	</Card.Content>
</Card.Root>
