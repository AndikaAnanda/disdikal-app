// Mock data untuk halaman Dokumen. Sama seperti profil-data.ts: sengaja bebas
// dari import Svelte/SvelteKit supaya bisa dipakai layout maupun page.

export type DocStatus = 'selesai' | 'proses' | 'gagal' | 'belum';

export interface StatistikLegend {
	id: string;
	status: DocStatus;
	label: string;
	count: string;
}

export interface Statistik {
	percent: number;
	lengkapLabel: string;
	sisa: string;
	legend: StatistikLegend[];
}

export const statistik: Statistik = {
	percent: 80,
	lengkapLabel: '6/8 Dokumen Lengkap',
	sisa: 'Sisa 2 Dokumen : KTP & SK Pangkat Terakhir belum valid',
	legend: [
		{ id: 'selesai', status: 'selesai', label: 'Selesai', count: '03' },
		{ id: 'proses', status: 'proses', label: 'Sedang Proses', count: '01' },
		{ id: 'gagal', status: 'gagal', label: 'Tidak Sesuai/Gagal', count: '01' },
		{ id: 'belum', status: 'belum', label: 'Belum Mulai', count: '01' }
	]
};

export type PanduanStepId = 'formulir' | 'berkas' | 'validasi' | 'verifikasi' | 'unduh';

export interface PanduanStep {
	id: PanduanStepId;
	label: string;
}

export const panduanParagraf =
	'Silahkan lengkapi seluruh dokumen persyaratan sebagai bagian dari proses seleksi pendidikan TNI Angkatan Laut. Pastikan dokumen yang diunggah sesuai dengan ketentuan yang berlaku agar proses verifikasi dapat berjalan dengan lancar';

export const panduanSteps: PanduanStep[] = [
	{ id: 'formulir', label: 'Formulir' },
	{ id: 'berkas', label: 'Berkas' },
	{ id: 'validasi', label: 'Menunggu Validasi' },
	{ id: 'verifikasi', label: 'Verifikasi' },
	{ id: 'unduh', label: 'Download Hasil' }
];

export const panduanBullets: string[] = [
	'Standarisasi Dokumen: min 3000 Mb',
	'Format Dokumen: PDF/Docx',
	'Batas Upload: Sesuai Jadwal',
	'Format Foto: JPG/PNG'
];

export type FileType = 'pdf' | 'png';

export interface PenunjangItem {
	id: string;
	name: string;
	size: string;
	fileType: FileType;
}

export const dokumenPenunjang: PenunjangItem[] = [
	{ id: 'formulir', name: 'Formulir & Data Profil.pdf', size: '1.2 MB', fileType: 'pdf' },
	{ id: 'patubel', name: 'Patubel Dikpitek.pdf', size: '1.5 MB', fileType: 'pdf' },
	{ id: 'berkas-masuk', name: 'Berkas Masuk.pdf', size: '1.8 MB', fileType: 'pdf' },
	{ id: 'dokumen-sk', name: 'Dokumen SK.pdf', size: '1.3 MB', fileType: 'pdf' },
	{ id: 'gun-gelar', name: 'Gun Gelar.pdf', size: '890 KB', fileType: 'pdf' }
];

export interface Helpdesk {
	phone: string;
	email: string;
}

export const helpdesk: Helpdesk = {
	phone: '021-6253-9473',
	email: 'emailsupport@disdikaltnial.com'
};

export interface DokumenRow {
	id: string;
	tanggal: string;
	jam: string;
	nama: string;
	format: string;
	maks: string;
	fileName: string;
	fileSize: string;
	fileType: FileType;
	status: DocStatus;
}

/** Status `belum` dirender tanpa file terunggah dan tanpa tombol "Lihat". */
export const dokumenPribadi: DokumenRow[] = [
	{
		id: 'formulir-data-profile',
		tanggal: '15 Apr 2024',
		jam: '10:30 WIB',
		nama: 'Formulir & Data Profile',
		format: 'Format: DOCX, PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Data_Profil_Pangidoan.pdf',
		fileSize: '1.2 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'ktp',
		tanggal: '15 Apr 2024',
		jam: '10:30 WIB',
		nama: 'KTP / Surat Tanda Prajurit',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'KTP_Pangidoan.pdf',
		fileSize: '1.2 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'pas-foto',
		tanggal: '15 Apr 2024',
		jam: '10:30 WIB',
		nama: 'Pas Foto 4x6',
		format: 'Format: PNG, JPG, JPEG',
		maks: 'Maks. 2 MB',
		fileName: 'Pas_Foto_Pangidoan.png',
		fileSize: '1.2 MB',
		fileType: 'png',
		status: 'selesai'
	},
	{
		id: 'kartu-keluarga',
		tanggal: '15 Apr 2024',
		jam: '10:30 WIB',
		nama: 'Kartu Keluarga',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Kartu_Keluarga_Pangidoan.pdf',
		fileSize: '1.2 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'akta-kelahiran',
		tanggal: '15 Apr 2024',
		jam: '10:30 WIB',
		nama: 'Akta Kelahiran',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Akta_Kelahiran_Pangidoan.pdf',
		fileSize: '1.2 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'skck',
		tanggal: '15 Apr 2024',
		jam: '10:30 WIB',
		nama: 'Surat Catatan Kepolisian (SKCK)',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'SKCK_Pangidoan.pdf',
		fileSize: '1.0 MB',
		fileType: 'pdf',
		status: 'proses'
	},
	{
		id: 'buku-rekening',
		tanggal: '15 Apr 2024',
		jam: '10:30 WIB',
		nama: 'Buku Rekening (Halaman Depan)',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Buku_Rekening_Pangidoan.pdf',
		fileSize: '1.0 MB',
		fileType: 'pdf',
		status: 'gagal'
	},
	{
		id: 'surat-sehat',
		tanggal: '-',
		jam: '',
		nama: 'Surat Keterangan Sehat',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: '',
		fileSize: '',
		fileType: 'pdf',
		status: 'belum'
	},
	{
		id: 'ijazah',
		tanggal: '14 Apr 2024',
		jam: '09:15 WIB',
		nama: 'Ijazah Terakhir',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Ijazah_Pangidoan.pdf',
		fileSize: '1.4 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'transkrip',
		tanggal: '14 Apr 2024',
		jam: '09:20 WIB',
		nama: 'Transkrip Nilai',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Transkrip_Pangidoan.pdf',
		fileSize: '1.1 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'sk-pangkat',
		tanggal: '14 Apr 2024',
		jam: '11:00 WIB',
		nama: 'SK Pangkat Terakhir',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'SK_Pangkat_Pangidoan.pdf',
		fileSize: '900 KB',
		fileType: 'pdf',
		status: 'gagal'
	},
	{
		id: 'sk-jabatan',
		tanggal: '13 Apr 2024',
		jam: '14:05 WIB',
		nama: 'SK Jabatan Terakhir',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'SK_Jabatan_Pangidoan.pdf',
		fileSize: '950 KB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'izin-komandan',
		tanggal: '13 Apr 2024',
		jam: '15:40 WIB',
		nama: 'Surat Izin Komandan',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Izin_Komandan_Pangidoan.pdf',
		fileSize: '780 KB',
		fileType: 'pdf',
		status: 'proses'
	},
	{
		id: 'riwayat-hidup',
		tanggal: '12 Apr 2024',
		jam: '08:30 WIB',
		nama: 'Daftar Riwayat Hidup',
		format: 'Format: DOCX, PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Riwayat_Hidup_Pangidoan.pdf',
		fileSize: '1.3 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'bebas-narkoba',
		tanggal: '12 Apr 2024',
		jam: '10:00 WIB',
		nama: 'Surat Keterangan Bebas Narkoba',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Bebas_Narkoba_Pangidoan.pdf',
		fileSize: '1.0 MB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'sertifikat-kursus',
		tanggal: '11 Apr 2024',
		jam: '13:25 WIB',
		nama: 'Sertifikat Kursus Kejuruan',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'Sertifikat_Kursus_Pangidoan.pdf',
		fileSize: '1.6 MB',
		fileType: 'pdf',
		status: 'proses'
	},
	{
		id: 'asuransi',
		tanggal: '11 Apr 2024',
		jam: '16:10 WIB',
		nama: 'Kartu Asuransi Kesehatan',
		format: 'Format: PNG, JPG, JPEG',
		maks: 'Maks. 2 MB',
		fileName: 'Asuransi_Pangidoan.png',
		fileSize: '850 KB',
		fileType: 'png',
		status: 'selesai'
	},
	{
		id: 'pernyataan-kesanggupan',
		tanggal: '-',
		jam: '',
		nama: 'Surat Pernyataan Kesanggupan',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: '',
		fileSize: '',
		fileType: 'pdf',
		status: 'belum'
	},
	{
		id: 'nilai-alcpt',
		tanggal: '10 Apr 2024',
		jam: '09:45 WIB',
		nama: 'Nilai Tes ALCPT',
		format: 'Format: PDF',
		maks: 'Maks. 5 MB',
		fileName: 'ALCPT_Pangidoan.pdf',
		fileSize: '640 KB',
		fileType: 'pdf',
		status: 'selesai'
	},
	{
		id: 'foto-keluarga',
		tanggal: '-',
		jam: '',
		nama: 'Foto Keluarga',
		format: 'Format: PNG, JPG, JPEG',
		maks: 'Maks. 2 MB',
		fileName: '',
		fileSize: '',
		fileType: 'png',
		status: 'belum'
	}
];
