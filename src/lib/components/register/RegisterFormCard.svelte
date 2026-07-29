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

<Card.Root class="bg-transparent text-[#01296E] p-0 shadow-none ring-0">
	<Card.Content class="p-0 flex flex-col gap-5">
		<DataDiriSection {form} />
		<InformasiAkunSection {form} />
	</Card.Content>
</Card.Root>
