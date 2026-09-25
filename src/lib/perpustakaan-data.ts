export const perpustakaanBanner = {
	title: 'Koleksi Ilmu untuk Masa Depan TNI AL',
	description: [
		'Koleksi buku, jurnal, modul, dan karya ilmiah untuk mendukung pengembangan ilmu pengetahuan.',
		'Ajukan publikasi ke Perpustakaan Nasional melalui proses verifikasi oleh admin Disdikal.'
	]
};

export type KoleksiStatus = 'publikasi' | 'proses' | 'verifikasi' | 'internal';

export type KoleksiTabId = 'semua' | KoleksiStatus;

export const JENIS_KARYA = ['Buku', 'Jurnal', 'Modul', 'Peraturan', 'Template', 'Laporan'] as const;

export type JenisKarya = (typeof JENIS_KARYA)[number];

export const KATEGORI = [
	'Pertahanan',
	'Kemaritiman',
	'Teknologi',
	'Kepemimpinan',
	'Administrasi',
	'Penelitian'
] as const;

export const PROGRAM_STUDI = [
	'Manajemen Pertahanan',
	'Teknik Pertahanan',
	'Teknologi Kelautan',
	'Administrasi Militer',
	'Sistem Informasi'
] as const;

export const TAHUN_TERBIT = ['2026', '2025', '2024', '2023', '2022'] as const;

export const SORT_OPTIONS = ['Terbaru', 'Terlama', 'Judul A-Z'] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];

export type CoverTone = 'navy' | 'blue' | 'teal' | 'slate' | 'amber' | 'green';

export interface KoleksiItem {
	id: string;
	judul: string;
	penulis: string;
	tahun: string;
	jenis: JenisKarya;
	kategori: (typeof KATEGORI)[number];
	programStudi: (typeof PROGRAM_STUDI)[number];
	status: KoleksiStatus;
	diPerpusnas: boolean;
	cover: CoverTone;
}

export const koleksiItems: KoleksiItem[] = [
	{
		id: 'kol-01',
		judul: 'Strategi Pertahanan Maritim Indonesia',
		penulis: 'Laksamana TNI (Purn) Dr. Agus Setiawan',
		tahun: '2023',
		jenis: 'Buku',
		kategori: 'Pertahanan',
		programStudi: 'Manajemen Pertahanan',
		status: 'publikasi',
		diPerpusnas: false,
		cover: 'navy'
	},
	{
		id: 'kol-02',
		judul: 'Modul Pelatihan Navigasi Elektronik',
		penulis: 'Dinas Pendidikan TNI AL',
		tahun: '2022',
		jenis: 'Modul',
		kategori: 'Kemaritiman',
		programStudi: 'Teknologi Kelautan',
		status: 'publikasi',
		diPerpusnas: false,
		cover: 'blue'
	},
	{
		id: 'kol-03',
		judul: 'Jurnal Kemaritiman Indonesia',
		penulis: 'Prof Dr. Budi Santoso',
		tahun: '2024',
		jenis: 'Jurnal',
		kategori: 'Kemaritiman',
		programStudi: 'Teknologi Kelautan',
		status: 'publikasi',
		diPerpusnas: false,
		cover: 'teal'
	},
	{
		id: 'kol-04',
		judul: 'Peraturan Kasal tentang Penggunaan Gelar Akademik',
		penulis: 'Perkasal No. 12/2024',
		tahun: '2024',
		jenis: 'Peraturan',
		kategori: 'Administrasi',
		programStudi: 'Administrasi Militer',
		status: 'publikasi',
		diPerpusnas: true,
		cover: 'teal'
	},
	{
		id: 'kol-05',
		judul: 'Template Daftar Riwayat Hidup Disdikal 2026',
		penulis: 'Dinas Pendidikan TNI AL',
		tahun: '2026',
		jenis: 'Template',
		kategori: 'Administrasi',
		programStudi: 'Administrasi Militer',
		status: 'publikasi',
		diPerpusnas: false,
		cover: 'slate'
	},
	{
		id: 'kol-06',
		judul: 'Panduan Persiapan ALCPT Menuju Pengembangan Karier yang Berkelanjutan',
		penulis: 'Dinas Pendidikan TNI AL',
		tahun: '2025',
		jenis: 'Modul',
		kategori: 'Kepemimpinan',
		programStudi: 'Manajemen Pertahanan',
		status: 'publikasi',
		diPerpusnas: false,
		cover: 'blue'
	},
	{
		id: 'kol-07',
		judul: 'Kepemimpinan Militer: Nilai, Integritas, dan Keteladanan untuk Negeri',
		penulis: 'Laksamana Muda TNI Dr. Hendra Wijaya',
		tahun: '2023',
		jenis: 'Buku',
		kategori: 'Kepemimpinan',
		programStudi: 'Manajemen Pertahanan',
		status: 'publikasi',
		diPerpusnas: true,
		cover: 'navy'
	},
	{
		id: 'kol-08',
		judul: 'Laporan Penelitian Pengembangan Alutsista Kelautan',
		penulis: 'Pusat Penelitian Disdikal',
		tahun: '2025',
		jenis: 'Laporan',
		kategori: 'Penelitian',
		programStudi: 'Teknik Pertahanan',
		status: 'proses',
		diPerpusnas: false,
		cover: 'slate'
	},
	{
		id: 'kol-09',
		judul: 'Teknologi Maritim untuk Kemandirian Industri Pertahanan',
		penulis: 'Dr. Ir. Rangga Pratama',
		tahun: '2024',
		jenis: 'Buku',
		kategori: 'Teknologi',
		programStudi: 'Teknik Pertahanan',
		status: 'proses',
		diPerpusnas: false,
		cover: 'amber'
	},
	{
		id: 'kol-10',
		judul: 'Sistem Informasi Pendidikan Disdikal',
		penulis: 'Tim Pengembang Sistem Disdikal',
		tahun: '2026',
		jenis: 'Modul',
		kategori: 'Teknologi',
		programStudi: 'Sistem Informasi',
		status: 'verifikasi',
		diPerpusnas: false,
		cover: 'green'
	},
	{
		id: 'kol-11',
		judul: 'Jurnal Inovasi Teknologi Kelautan Nasional',
		penulis: 'Prof Dr. Siti Rahmawati',
		tahun: '2025',
		jenis: 'Jurnal',
		kategori: 'Teknologi',
		programStudi: 'Teknologi Kelautan',
		status: 'verifikasi',
		diPerpusnas: false,
		cover: 'teal'
	},
	{
		id: 'kol-12',
		judul: 'Pedoman Administrasi Pendidikan Lanjutan Perwira',
		penulis: 'Dinas Pendidikan TNI AL',
		tahun: '2024',
		jenis: 'Peraturan',
		kategori: 'Administrasi',
		programStudi: 'Administrasi Militer',
		status: 'verifikasi',
		diPerpusnas: false,
		cover: 'blue'
	},
	{
		id: 'kol-13',
		judul: 'Laporan Evaluasi Kurikulum Pendidikan Disdikal',
		penulis: 'Pusat Penelitian Disdikal',
		tahun: '2025',
		jenis: 'Laporan',
		kategori: 'Penelitian',
		programStudi: 'Sistem Informasi',
		status: 'internal',
		diPerpusnas: false,
		cover: 'slate'
	},
	{
		id: 'kol-14',
		judul: 'Modul Internal Manajemen Logistik Satuan',
		penulis: 'Dinas Pendidikan TNI AL',
		tahun: '2023',
		jenis: 'Modul',
		kategori: 'Administrasi',
		programStudi: 'Administrasi Militer',
		status: 'internal',
		diPerpusnas: false,
		cover: 'amber'
	}
];

export const statusLabel = (item: KoleksiItem): string => {
	if (item.status === 'publikasi') {
		return item.diPerpusnas ? 'Sudah dipublikasikan di Perpusnas' : 'Sudah dipublikasikan';
	}
	if (item.status === 'proses') return 'Dalam proses pengajuan';
	if (item.status === 'verifikasi') return 'Perlu verifikasi Disdikal';
	return 'Masih internal';
};

export const statusDot = (item: KoleksiItem): string => {
	if (item.status === 'publikasi') {
		return item.diPerpusnas ? 'bg-(--accent-blue)' : 'bg-(--accent-green)';
	}
	if (item.status === 'proses') return 'bg-(--accent-orange)';
	if (item.status === 'verifikasi') return 'bg-(--accent-blue)';
	return 'bg-(--dash-muted)';
};

export interface KoleksiTab {
	id: KoleksiTabId;
	label: string;
	count: string;
}

export const tabCountTone: Record<KoleksiTabId, string> = {
	semua: 'bg-(--accent-blue-50) text-(--accent-blue)',
	publikasi: 'bg-(--accent-green-50) text-(--accent-green)',
	proses: 'bg-(--accent-orange-50) text-(--accent-orange)',
	verifikasi: 'bg-(--accent-blue-50) text-(--accent-blue)',
	internal: 'bg-[#f1f5f9] text-(--dash-muted)'
};

export const tabLabel: Record<KoleksiTabId, string> = {
	semua: 'Semua Koleksi',
	publikasi: 'Sudah Dipublikasikan',
	proses: 'Dalam Proses Pengajuan',
	verifikasi: 'Perlu Verifikasi Disdikal',
	internal: 'Masih Internal'
};

export const KOLEKSI_TABS: KoleksiTabId[] = [
	'semua',
	'publikasi',
	'proses',
	'verifikasi',
	'internal'
];
