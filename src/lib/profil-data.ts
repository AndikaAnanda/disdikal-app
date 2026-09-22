export interface ProfilHero {
	name: string;
	badgeLabel: string;
	nrp: string;
	pangkat: string;
	satker: string;
	pendidikanTerakhir: string;
	statusLabel: string;
	verifDate: string;
	completionPct: number;
}

export const profilHero: ProfilHero = {
	name: 'Pangidoan Nugroho Syahputra Harahap',
	badgeLabel: 'Peserta',
	nrp: '9175629002',
	pangkat: 'Letda',
	satker: 'Koarmada II',
	pendidikanTerakhir: 'S.T.Han. (Sarjana Teknik Pertahanan)',
	statusLabel: 'Akun Terverifikasi',
	verifDate: '05 April 26 - 13:00 WIB',
	completionPct: 90
};

export type ProfilIconId =
	| 'user'
	| 'id-card'
	| 'calendar'
	| 'medal'
	| 'gender'
	| 'briefcase'
	| 'landmark'
	| 'building'
	| 'heart'
	| 'map-pin'
	| 'mail'
	| 'phone'
	| 'graduation'
	| 'school'
	| 'book'
	| 'award';

export interface InfoFieldItem {
	id: string;
	icon: ProfilIconId;
	label: string;
	value: string;
}

export const personalFields: InfoFieldItem[] = [
	{ id: 'nama', icon: 'user', label: 'Nama Lengkap', value: 'Pangidoan Nughoro Syahputra Harahap' },
	{ id: 'nrp', icon: 'id-card', label: 'NRP', value: '9175629002' },
	{ id: 'ttl', icon: 'calendar', label: 'Tempat, Tanggal Lahir', value: 'Surabaya, 14 Juni 1985' },
	{ id: 'pangkat', icon: 'medal', label: 'Pangkat', value: 'Letda' },
	{ id: 'gender', icon: 'gender', label: 'Jenis Kelamin', value: 'Laki-laki' },
	{ id: 'jabatan', icon: 'briefcase', label: 'Jabatan', value: 'Perwira Staf' },
	{ id: 'agama', icon: 'landmark', label: 'Agama', value: 'Islam' },
	{ id: 'satker', icon: 'building', label: 'Satuan Kerja', value: 'Koarmada II' },
	{ id: 'perkawinan', icon: 'heart', label: 'Status Perkawinan', value: 'Menikah' },
	{ id: 'alamat', icon: 'map-pin', label: 'Alamat', value: 'Jl. Gresik No. 45, Surabaya' },
	{ id: 'email', icon: 'mail', label: 'Email', value: 'Pangidoan@gmail.com' },
	{ id: 'phone', icon: 'phone', label: 'Phone', value: '+62 81638593726' }
];

export const educationFields: InfoFieldItem[] = [
	{ id: 'jenjang', icon: 'graduation', label: 'Jenjang Pendidikan', value: 'S1 - Sarjana' },
	{
		id: 'kampus',
		icon: 'school',
		label: 'Perguruan Tinggi',
		value: 'Universitas Pertahanan Republik Indonesia'
	},
	{ id: 'prodi', icon: 'book', label: 'Program Studi', value: 'Manajemen Pertahanan' },
	{ id: 'gelar', icon: 'award', label: 'Gelar yang Dimiliki', value: 'S.T.Han' }
];

export type DokumenStatus = 'terverifikasi' | 'menunggu' | 'belum';
export type DokumenFileType = 'pdf' | 'jpg';

export interface DokumenItem {
	id: string;
	title: string;
	kind: string;
	status: DokumenStatus;
	fileName?: string;
	fileType?: DokumenFileType;
	meta?: string;
	withNameInput?: boolean;
	preview?: string;
}

export type DokumenSectionId = 'pribadi' | 'pendidikan' | 'dinas';

export interface DokumenSection {
	id: DokumenSectionId;
	title: string;
	subtitle: string;
	columns: 3 | 4;
	items: DokumenItem[];
}

const uploaded = 'Diunggah 12 Januari 2025 · 2.5 MB';
const issued = 'Dikeluarkan pada 12 Januari 2025 · 2.5 MB';

export const dokumenSections: Record<DokumenSectionId, DokumenSection> = {
	pribadi: {
		id: 'pribadi',
		title: 'Dokumen Pribadi',
		subtitle: 'Kelola dokumen pendukung data pribadi Anda.',
		columns: 4,
		items: [
			{
				id: 'ktp',
				title: 'Kartu Tanda Penduduk',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'KTP_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'kta',
				title: 'Kartu Identitas TNI AL / NRP',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'Kartu_TNI_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'pas-foto',
				title: 'Pas Foto Terbaru Latar Polos',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'Pas_Foto_Pangidoan.jpg',
				fileType: 'jpg',
				meta: uploaded
			},
			{
				id: 'kk',
				title: 'Kartu Keluarga',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'Kartu_Keluarga.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'cv',
				title: 'Curiculum Vitae',
				kind: 'Dokumen Wajib',
				status: 'menunggu',
				fileName: 'CV_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'npwp',
				title: 'NPWP',
				kind: 'Dokumen Wajib',
				status: 'menunggu',
				fileName: 'NPWP_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'bpjs',
				title: 'BPJS Kesehatan',
				kind: 'Dokumen Optional',
				status: 'menunggu',
				fileName: 'BPJS_Kesehatan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'sim',
				title: 'Surat Izin Mengemudi',
				kind: 'Dokumen Optional',
				status: 'menunggu',
				fileName: 'SIM_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'lainnya',
				title: 'Dokumen Lainnya (Optional)',
				kind: 'Dokumen pendukung lainnya yang relevan',
				status: 'belum',
				withNameInput: true
			}
		]
	},
	pendidikan: {
		id: 'pendidikan',
		title: 'Dokumen Pendidikan',
		subtitle: 'Kelola dokumen pendidikan Anda sesuai dengan jenjang yang dimiliki.',
		columns: 3,
		items: [
			{
				id: 'ijazah-sma',
				title: 'Ijazah SMA / Sederajat',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'Ijazah_SMA_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'ijazah-s1',
				title: 'Ijazah S1',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'Ijazah_S1_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'transkrip-s1',
				title: 'Transkrip Nilai S1',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'Transkrip_Nilai_S1_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'toefl',
				title: 'Sertifikat Kemampuan Bahasa Inggris',
				kind: 'Dokumen Wajib',
				status: 'terverifikasi',
				fileName: 'TOEFL_Pangidoan.pdf',
				fileType: 'pdf',
				meta: uploaded
			},
			{
				id: 'sertifikat',
				title: 'Sertifikat Kompetensi / Pelatihan',
				kind: 'Dokumen Optional',
				status: 'terverifikasi',
				fileName: 'Sertifikat_Pelatihan.pdf',
				fileType: 'pdf',
				meta: uploaded
			}
		]
	},
	dinas: {
		id: 'dinas',
		title: 'Dokumen Dinas',
		subtitle: 'Kelola dokumen kedinasan Anda sesuai dengan ketentuan yang berlaku.',
		columns: 3,
		items: [
			{
				id: 'sk-penugasan',
				title: 'Surat Keputusan (SK) Penugasan',
				kind: 'Dokumen Pendukung',
				status: 'terverifikasi',
				fileName: 'SK_Penugasan.pdf',
				fileType: 'pdf',
				meta: issued
			},
			{
				id: 'surat-tugas',
				title: 'Surat Tugas',
				kind: 'Dokumen Pendukung',
				status: 'terverifikasi',
				fileName: 'Surat_Tugas.pdf',
				fileType: 'pdf',
				meta: issued
			},
			{
				id: 'aktif-dinas',
				title: 'Surat Keterangan Aktif Dinas',
				kind: 'Dokumen Pendukung',
				status: 'terverifikasi',
				fileName: 'SK_Aktif_Dinas.pdf',
				fileType: 'pdf',
				meta: issued
			},
			{
				id: 'rekomendasi',
				title: 'Surat Rekomendasi Atasan',
				kind: 'Dokumen Pendukung',
				status: 'terverifikasi',
				fileName: 'Rekomendasi_Atasan.pdf',
				fileType: 'pdf',
				meta: issued
			}
		]
	}
};

export const passwordTips: string[] = [
	'Minimal 8 Karakter',
	'Gunakan huruf besar dan huruf kecil',
	'Tambahkan angka (0-9)',
	'Gunakan simbol (contoh: !@#$%^&*)',
	'Jangan gunakan kata sandi yang sama dengan akun lain'
];
