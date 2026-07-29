<script lang="ts">
	import registerIcon from '$lib/assets/register-icon/6d00f45362e0a718e982215c214bf3e37adba0b2.png';
</script>

<div
	class="register-banner relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl px-5 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-8 sm:py-6"
>
	<img
		src={registerIcon}
		alt=""
		class="relative z-2 size-14 shrink-0 object-contain sm:size-21.25"
	/>

	<div class="relative z-2">
		<h1 class="mb-1.5 text-lg leading-tight font-bold text-[#01296E] sm:mb-2 sm:text-[24px]">
			Pendaftaran Akun Akademi Angkatan Laut
		</h1>
		<p class="max-w-140 text-xs leading-relaxed font-medium text-[#343434] sm:text-[14px]">
			Lengkapi data diri Anda dengan benar. Setelah diverifikasi oleh admin, akun Anda akan aktif
			dan digunakan untuk proses pendaftaran Akademi TNI Angkatan Laut
		</p>
	</div>
</div>

<style>
	/* Background berlapis: gambar di atas, gradient sebagai jaring pengaman.
	   Multi-layer background-image dengan url() tidak punya padanan utility. */
	.register-banner {
		background-image:
			url('../../assets/bg/register-card-bg.png'),
			linear-gradient(to right, #eef3fb, #dbe7f8, #cddef4);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
