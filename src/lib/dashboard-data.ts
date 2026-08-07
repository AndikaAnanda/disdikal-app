// Mock data untuk dashboard Disdikal. Sengaja bebas dari import Svelte/SvelteKit
// supaya bisa dipakai layout maupun page tanpa efek samping.

export interface UserProfile {
	name: string;
	shortName: string;
	role: string;
	nrp: string;
	satker: string;
	programStudi: string;
	gelar: string;
	statusLabel: string;
	lastLogin: string;
	profileCompletionPct: number;
	profileRemaining: string;
	email: string;
	workingHours: string;
	unreadCount: number;
}

export const currentUser: UserProfile = {
	name: 'Pangidoan Nugroho Syahputra Harahap',
	shortName: 'Pangidoan Nugroho',
	role: 'Koarmada II',
	nrp: '9175629002',
	satker: 'Koarmada II',
	programStudi: 'Gun Gelar (S2)',
	gelar: 'M.Han',
	statusLabel: 'Sedang Proses',
	lastLogin: "06 Apr '26 - 13.00 WIB",
	profileCompletionPct: 90,
	profileRemaining: 'Sisa 1 Dokumen: SK Pangkat Terakhir',
	email: 'support@tnial.com',
	workingHours: 'Working: 8.00am - 5.00pm',
	unreadCount: 3
};

export type NavTabId =
	| 'home'
	| 'profil'
	| 'pengajuan'
	| 'tes-bahasa'
	| 'riwayat'
	| 'detail'
	| 'download'
	| 'perpustakaan';

export interface NavTab {
	id: NavTabId;
	label: string;
	active: boolean;
}

/**
 * Baru tab `home` dan `profil` yang punya route asli; sisanya dirender sebagai
 * placeholder non-navigable di SubNav sampai halamannya dibuat.
 */
export const subNavTabs: NavTab[] = [
	{ id: 'home', label: 'Home', active: true },
	{ id: 'profil', label: 'Profil Saya', active: false },
	{ id: 'pengajuan', label: 'Pengajuan Layanan', active: false },
	{ id: 'tes-bahasa', label: 'Tes Bahasa Inggris', active: false },
	{ id: 'riwayat', label: 'Riwayat Pengajuan', active: false },
	{ id: 'detail', label: 'Detail Pengajuan', active: false },
	{ id: 'download', label: 'Download Hasil', active: false },
	{ id: 'perpustakaan', label: 'Perpustakaan', active: false }
];

export interface AnnouncementSummary {
	title: string;
	subLabel: string;
	dateRange: string;
}

export const announcement: AnnouncementSummary = {
	title: 'Pendaftaran Gelombang II Diktupa TA 2026 dibuka!',
	subLabel: 'Periode pendaftaran',
	dateRange: '15 April s.d 30 Mei 2026'
};

export interface DeadlineInfo {
	title: string;
	subLabel: string;
	days: string;
	hours: string;
	minutes: string;
}

export const uploadDeadline: DeadlineInfo = {
	title: 'Upload Dokumen',
	subLabel: 'Batas akhir dokumen persyaratan',
	days: '05',
	hours: '12',
	minutes: '45'
};

export type StatAccent = 'blue' | 'green' | 'yellow' | 'teal';

export interface StatItem {
	id: string;
	label: string;
	value: string;
	subLabel: string;
	accent: StatAccent;
}

export const stats: StatItem[] = [
	{
		id: 'total',
		label: 'Total Pengajuan',
		value: '12',
		subLabel: 'Semua Layanan',
		accent: 'blue'
	},
	{
		id: 'dokumen',
		label: 'Dokumen Pengajuan',
		value: '8/10',
		subLabel: 'Sudah diunggah',
		accent: 'green'
	},
	{
		id: 'verifikasi',
		label: 'Verifikasi Admin',
		value: 'Diproses',
		subLabel: 'Oleh Admin Disdikal',
		accent: 'yellow'
	},
	{
		id: 'jadwal',
		label: 'Jadwal Tes',
		value: '12 April 2026',
		subLabel: 'Tes ALCPT Online',
		accent: 'teal'
	},
	{
		id: 'hasil',
		label: 'Hasil Akhir',
		value: 'Belum Ada',
		subLabel: 'Menunggu Verifikasi',
		accent: 'teal'
	}
];

export type StepStatus = 'done' | 'current' | 'pending';

export interface TrackingStep {
	id: string;
	label: string;
	title: string;
	status: StepStatus;
}

export const trackingSteps: TrackingStep[] = [
	{ id: 'profil', label: 'Step 1', title: 'Lengkapi Profile', status: 'done' },
	{
		id: 'upload',
		label: 'Step 2',
		title: 'Upload Dokumen Persyaratan',
		status: 'current'
	},
	{
		id: 'ajukan',
		label: 'Step 3',
		title: 'Ajukan Layanan Pendidikan',
		status: 'pending'
	},
	{ id: 'verifikasi', label: 'Step 4', title: 'Verifikasi & Tes', status: 'pending' },
	{ id: 'hasil', label: 'Step 5', title: 'Hasil dan Selesai', status: 'pending' }
];

export type HistoryStatus = 'Selesai' | 'Validasi';

export interface HistoryRow {
	no: number;
	jenisLayanan: string;
	tanggal: string;
	status: HistoryStatus;
	keterangan: string;
	berkas: string;
	/** true kalau berkas masih perlu aksi unggah/perbaiki (pill biru). */
	berkasAction: boolean;
}

export const historyRows: HistoryRow[] = [
	{
		no: 1,
		jenisLayanan: 'Penggunaan Gelar (S2)',
		tanggal: '05 April 2026',
		status: 'Validasi',
		keterangan: 'Sedang penomoran SK di Subdis',
		berkas: 'Lengkap',
		berkasAction: false
	},
	{
		no: 2,
		jenisLayanan: 'Update Data Pendidikan',
		tanggal: '01 April 2026',
		status: 'Selesai',
		keterangan: 'Data profil berhasil diperbarui',
		berkas: 'Lengkap',
		berkasAction: false
	},
	{
		no: 3,
		jenisLayanan: 'Patubel Dikpitek',
		tanggal: '20 Maret 2026',
		status: 'Selesai',
		keterangan: 'Sertifikat & SK telah diterbitkan',
		berkas: 'Upload SK Jabatan',
		berkasAction: true
	},
	{
		no: 4,
		jenisLayanan: 'Duk Admin Sus Barjas',
		tanggal: '15 Februari 2026',
		status: 'Selesai',
		keterangan: 'Berkas administrasi perlu perbaikan',
		berkas: 'Lengkap',
		berkasAction: false
	},
	{
		no: 5,
		jenisLayanan: 'Update Data Setprof',
		tanggal: '25 Januari 2026',
		status: 'Selesai',
		keterangan: 'Verifikasi kepangkatan selesai',
		berkas: 'Upload Sertifikat Kursus',
		berkasAction: true
	}
];

export interface TimelineEntry {
	time: string;
	text: string;
}

export interface TimelineGroup {
	date: string;
	entries: TimelineEntry[];
}

export const timelineGroups: TimelineGroup[] = [
	{
		date: 'Hari ini - 06 April 2026',
		entries: [
			{ time: '13:00', text: 'Admin menerima pengajuan layanan pendidikan Anda' },
			{ time: '12:45', text: 'Dokumen SK Jabatan berhasil diupload' },
			{ time: '09:30', text: 'Profil berhasil diperbaharui' }
		]
	},
	{
		date: 'Kemarin - 05 April 2026',
		entries: [
			{ time: '16:00', text: 'Tes ALCPT Online selesai dikerjakan' },
			{ time: '16:00', text: 'Nilai Tes ALCPT: 85 (Advanced)' },
			{ time: '10:15', text: 'Verifikasi dokumen oleh admin dimulai' }
		]
	}
];

export type InfoListIcon = 'calendar' | 'document';

export interface InfoListItem {
	id: string;
	title: string;
	subtitle: string;
	date: string;
	icon: InfoListIcon;
}

export const infoItems: InfoListItem[] = [
	{
		id: 'diktupa',
		title: 'Pendaftaran Seleksi Diktupa TA 2026:',
		subtitle: '15 April sampai 30 Mei 2026',
		date: '06 Apr 2026',
		icon: 'calendar'
	},
	{
		id: 'alcpt',
		title: 'Tes ALCPT Online (Mandiri)',
		subtitle: 'Jadwal fleksibilitas sesuai akun',
		date: '02 Apr 2026',
		icon: 'calendar'
	},
	{
		id: 'scan',
		title: 'Upload scan dokumen asli wajib PDF',
		subtitle: 'Berwarna (resolusi 300 DPI)',
		date: '01 Apr 2026',
		icon: 'document'
	},
	{
		id: 'verifikasi',
		title: 'Verifikasi Berkas: Admin Disdikal menyatakan',
		subtitle: 'dokumen ID #GD-9918 LENGKAP',
		date: '30 Mar 2026',
		icon: 'document'
	}
];

export interface RadarScore {
	axis: string;
	userScore: number;
	avgScore: number;
}

/** Mockup aslinya memberi label "Reading" dua kali; axis kelima diperbaiki jadi Structure. */
export const alcptScores: RadarScore[] = [
	{ axis: 'Grammar', userScore: 92, avgScore: 78 },
	{ axis: 'Listening', userScore: 68, avgScore: 70 },
	{ axis: 'Reading', userScore: 84, avgScore: 76 },
	{ axis: 'Vocabulary', userScore: 80, avgScore: 74 },
	{ axis: 'Structure', userScore: 84, avgScore: 72 }
];

export interface AlcptSummary {
	score: number;
	level: string;
	testDate: string;
}

export const alcptSummary: AlcptSummary = {
	score: 85,
	level: 'Advanced',
	testDate: '28 Mar 2026'
};

export interface DownloadItem {
	id: string;
	fileName: string;
}

export const downloadItems: DownloadItem[] = [
	{ id: 'sertifikat-1', fileName: 'Sertifikat Gun Gelar Pangidoan_2026.pdf' },
	{ id: 'sertifikat-2', fileName: 'SK Penggunaan Gelar Pangidoan_2026.pdf' }
];
