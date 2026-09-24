export type LayananId = 'gun' | 'updatedik' | 'patubel' | 'barjas' | 'setprof' | 'iptek' | 'diklu';

export type MenuIconId = LayananId | 'all';

export interface LayananItem {
	id: LayananId;
	code: string;
	menuLabel: string;
	title: string;
	description: string;
}

export const pengajuanBanner = {
	title: 'Pengajuan Layanan',
	description:
		'Lengkapi data diri Anda dengan benar. Setelah diverifikasi oleh admin, akun Anda akan aktif dan digunakan untuk proses pendaftaran Akademi TNI Angkatan Laut'
};

export const layananItems: LayananItem[] = [
	{
		id: 'gun',
		code: 'GUN GELAR',
		menuLabel: 'Gun Gelar',
		title: 'Pengajuan Penggunaan Gelar Akademik',
		description:
			'Mengajukan penggunaan gelar akademik yang telah diperoleh dari perguruan tinggi agar diakui resmi di lingkungan TNI AL'
	},
	{
		id: 'updatedik',
		code: 'UPDATE DATA DIK',
		menuLabel: 'Update Data Dik',
		title: 'Update Data Riwayat Pendidikan',
		description:
			'Memperbaharui data pendidikan personel seperti jenjang, program studi dan perguruan tinggi berdasarkan dokumen resmi'
	},
	{
		id: 'patubel',
		code: 'PATUBEL DIKPITEK',
		menuLabel: 'Patubel Dikpitek',
		title: 'Tugas Belajar Bidang Pendidikan, Ilmu Pengetahuan dan Teknologi',
		description:
			'Mengajukan perintah tugas belajar pada bidang pendidikan, ilmu pengetahuan, dan teknologi sesuai ketentuan kompetensi'
	},
	{
		id: 'barjas',
		code: 'DUK ADMIN SUS BARJAS',
		menuLabel: 'Duk Admin Sus Barjas',
		title: 'Administrasi Peserta Kursus Barjas',
		description:
			'Mengelola administrasi peserta kursus barjas mulai dari pengajuan, kelengkapan dokumen hingga verifikasi administrasi'
	},
	{
		id: 'setprof',
		code: 'UPDATE DATA SETPROF',
		menuLabel: 'Update Data Setprof',
		title: 'Update Data Sertifikasi Profesi',
		description:
			'Memperbaharui data sertifikasi kompetensi maupun sertifikasi profesi agar data kompetensi pada sistem selalu valid'
	},
	{
		id: 'iptek',
		code: 'PATUBEL IPTEK',
		menuLabel: 'Patubel Iptek',
		title: 'Tugas Belajar Bidang IPTEK',
		description:
			'Mengajukan tugas belajar bidang IPTEK di dalam maupun luar negeri sebagai bagian pengembangan kompetensi nasional'
	},
	{
		id: 'diklu',
		code: 'DIKLU',
		menuLabel: 'Diklu',
		title: 'Administrasi Pendidikan Lanjutan (DIKLU)',
		description:
			'Mengelola administrasi pendidikan lanjutan dari pengajuan, verifikasi dokumen, hingga proses administrasi pendidikan'
	}
];
