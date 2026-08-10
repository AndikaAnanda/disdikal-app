<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
</script>

<div
	class="flex flex-wrap items-center gap-4.5 rounded-2xl border border-(--auth-border) bg-[linear-gradient(115deg,#ffffff_40%,var(--brand-100)_100%)] px-6 py-5.5"
>
	<span class="flex size-15.5 shrink-0 items-center justify-center rounded-full bg-(--brand-500)">
		<FileTextIcon class="size-7 text-white" strokeWidth={1.7} />
	</span>

	<div class="min-w-65 flex-1">
		<h1 class="text-[21px] leading-[1.3] font-semibold text-(--navy-950)">
			Pendaftaran Akun<br />Akademi Angkatan Laut
		</h1>
		<p class="mt-2 text-[13px] leading-[1.6] text-pretty text-(--auth-subtext)">
			Lengkapi data diri Anda dengan benar. Setelah diverifikasi oleh admin, akun Anda akan aktif
			dan digunakan untuk proses pendaftaran Akademi TNI Angkatan Laut.
		</p>
	</div>
</div>
