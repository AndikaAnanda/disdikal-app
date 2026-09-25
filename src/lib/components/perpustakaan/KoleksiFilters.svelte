<script lang="ts">
	import BookmarkIcon from '@lucide/svelte/icons/bookmark';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FilterIcon from '@lucide/svelte/icons/filter';
	import ListIcon from '@lucide/svelte/icons/list';
	import RotateCwIcon from '@lucide/svelte/icons/rotate-cw';
	import SearchIcon from '@lucide/svelte/icons/search';
	import UserIcon from '@lucide/svelte/icons/user';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import AuthSelect from '$lib/components/auth/AuthSelect.svelte';
	import { Button } from '$lib/components/ui/button';
	import { JENIS_KARYA, KATEGORI, TAHUN_TERBIT } from '$lib/perpustakaan-data';

	let {
		judul = $bindable(''),
		penulis = $bindable(''),
		tahun = $bindable(''),
		jenis = $bindable(''),
		kategori = $bindable(''),
		onFilter,
		onReset
	}: {
		judul?: string;
		penulis?: string;
		tahun?: string;
		jenis?: string;
		kategori?: string;
		onFilter: () => void;
		onReset: () => void;
	} = $props();

	const field = 'min-w-48 flex-1';
	const labelClass = 'text-[11.5px]';
	const inputClass = 'py-2 text-[11.5px] md:text-[11.5px]';
	const triggerClass = 'py-2 text-[11.5px]';
	const action = 'h-9 cursor-pointer gap-1.5 rounded-md px-4 text-[11.5px] font-semibold';

	function reset() {
		judul = '';
		penulis = '';
		tahun = '';
		jenis = '';
		kategori = '';
		onReset();
	}
</script>

<div class="flex flex-wrap items-end gap-2.5">
	<AuthField
		id="filter-judul"
		label="Judul Buku"
		icon={SearchIcon}
		placeholder="Cari judul buku ..."
		bind:value={judul}
		class={field}
		{labelClass}
		{inputClass}
	/>

	<AuthField
		id="filter-penulis"
		label="Penulis"
		icon={UserIcon}
		placeholder="Cari nama penulis ..."
		bind:value={penulis}
		class={field}
		{labelClass}
		{inputClass}
	/>

	<AuthSelect
		id="filter-tahun"
		label="Tahun Terbit"
		icon={CalendarIcon}
		placeholder="Semua Tahun"
		options={TAHUN_TERBIT}
		bind:value={tahun}
		class={field}
		{labelClass}
		{triggerClass}
	/>

	<AuthSelect
		id="filter-jenis"
		label="Jenis Karya"
		icon={ListIcon}
		placeholder="Semua Jenis"
		options={JENIS_KARYA}
		bind:value={jenis}
		class={field}
		{labelClass}
		{triggerClass}
	/>

	<AuthSelect
		id="filter-kategori"
		label="Kategori"
		icon={BookmarkIcon}
		placeholder="Semua Kategori"
		options={KATEGORI}
		bind:value={kategori}
		class={field}
		{labelClass}
		{triggerClass}
	/>

	<div class="flex shrink-0 items-center gap-2.5">
		<Button
			type="button"
			onclick={onFilter}
			class="{action} bg-(--navy-950) text-white hover:bg-(--brand-600)"
		>
			<FilterIcon class="size-3.5" strokeWidth={2} />
			Filter
		</Button>
		<Button
			type="button"
			variant="outline"
			onclick={reset}
			class="{action} border-(--accent-blue) bg-white text-(--accent-blue) hover:bg-(--accent-blue-50) hover:text-(--accent-blue)"
		>
			<RotateCwIcon class="size-3.5" strokeWidth={2} />
			Reset
		</Button>
	</div>
</div>
