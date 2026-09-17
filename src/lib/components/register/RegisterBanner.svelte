<script lang="ts">
	import bannerBg from '$lib/assets/bg/BG_Card_Register.webp';
	import bannerIcon from '$lib/assets/register-icon.png';
</script>

<!-- Ilustrasi gedung ada di sisi kanan gambar, jadi teks dibatasi max-w agar
     tidak menimpanya di layar lebar. -->
<div
	class="flex min-h-32 items-center gap-4 bg-(--brand-50) bg-cover bg-right px-5 py-5 sm:gap-5 sm:px-8"
	style="background-image: url({bannerBg})"
>
	<img src={bannerIcon} alt="" class="size-14 shrink-0 sm:size-20" />
	<div class="min-w-0">
		<h1 class="text-[20px] leading-tight font-bold text-(--navy-950) sm:text-[22px]">
			Pendaftaran Akun<br />Akademi Angkatan Laut
		</h1>
		<p class="mt-1.5 max-w-115 text-[12.5px] leading-[1.6] text-pretty text-(--auth-subtext)">
			Lengkapi data diri Anda dengan benar. Setelah diverifikasi oleh admin, akun Anda akan aktif
			dan digunakan untuk proses pendaftaran Akademi TNI Angkatan Laut.
		</p>
	</div>
</div>
