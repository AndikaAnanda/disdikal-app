<script lang="ts">
	import registerIcon from '$lib/assets/register-icon/6d00f45362e0a718e982215c214bf3e37adba0b2.png';
</script>

<div
	class="register-banner relative flex items-center gap-5 overflow-hidden rounded-2xl px-8 py-6"
>
	<img src={registerIcon} alt="" class="relative z-2 size-21.25 shrink-0 object-contain" />

	<div class="relative z-2">
		<h1 class="mb-2 text-[24px] leading-tight font-bold text-[#01296E]">
			Pendaftaran Akun<br />Akademi Angkatan Laut
		</h1>
		<p class="max-w-140 text-[14px] font-medium leading-relaxed text-[#343434]">
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
