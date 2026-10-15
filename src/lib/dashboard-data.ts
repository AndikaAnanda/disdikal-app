export interface UserProfile {
	name: string;
	shortName: string;
	role: string;
	nrp: string;
	pangkat: string;
	satker: string;
	pendidikanTerakhir: string;
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
	pangkat: 'Letnan Kolonel',
	satker: 'Koarmada II',
	pendidikanTerakhir: 'S1 - Manajemen Pertahanan',
	profileCompletionPct: 90,
	profileRemaining: '2 data belum lengkap',
	email: 'support@tnial.com',
	workingHours: 'Working: 8.00am - 5.00pm',
	unreadCount: 3
};

export type NavTabId =
	'home' | 'profil' | 'pengajuan' | 'tes-bahasa' | 'riwayat' | 'download' | 'perpustakaan';

export interface NavTab {
	id: NavTabId;
	label: string;
	active: boolean;
}

export const subNavTabs: NavTab[] = [
	{ id: 'home', label: 'Home', active: true },
	{ id: 'profil', label: 'Profil Saya', active: false },
	{ id: 'pengajuan', label: 'Pengajuan Layanan', active: false },
	// { id: 'tes-bahasa', label: 'Tes Bahasa Inggris', active: false },
	{ id: 'riwayat', label: 'Riwayat Pengajuan', active: false },
	{ id: 'download', label: 'Download Hasil', active: false },
	{ id: 'perpustakaan', label: 'Perpustakaan', active: false }
];

export interface ScheduleItem {
	id: string;
	day: string;
	month: string;
	title: string;
	detail: string;
}

export const schedules: ScheduleItem[] = [
	{
		id: 'unggah',
		day: '30',
		month: 'Apr',
		title: 'Batas Unggah Dokumen Gelombang II',
		detail: '23.59 WIB · Gun Gelar 2026'
	},
	{
		id: 'alcpt',
		day: '06',
		month: 'Mei',
		title: 'Tes Bahasa Inggris (ALCPT)',
		detail: '08.00 WIB · Ujian Online Disdikal'
	}
];

export type StepStatus = 'done' | 'current' | 'pending';

export type StatAccent = 'blue' | 'green' | 'orange' | 'purple' | 'pink';

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
		value: '164',
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
		accent: 'orange'
	},
	{
		id: 'jadwal',
		label: 'Jadwal Tes',
		value: '12 April 2026',
		subLabel: 'Tes ALCPT Online',
		accent: 'purple'
	},
	{
		id: 'hasil',
		label: 'Hasil Akhir',
		value: 'Belum Ada',
		subLabel: 'Menunggu Verifikasi',
		accent: 'pink'
	}
];

export type HistoryStatus =
	'Sedang Diproses' | 'Menunggu Verifikasi' | 'Disetujui' | 'Ditolak' | 'Perlu Revisi';

export const HISTORY_STATUSES: HistoryStatus[] = [
	'Sedang Diproses',
	'Menunggu Verifikasi',
	'Disetujui',
	'Ditolak',
	'Perlu Revisi'
];

export interface HistoryRow {
	no: number;
	noPengajuan: string;
	jenisLayanan: string;
	tanggal: string;
	status: HistoryStatus;
	keterangan: string;
	verifikator: string;
	updateDate: string;
	updateTime: string;
}

export const historyRows: HistoryRow[] = [
	{
		no: 1,
		noPengajuan: 'PDK-2026-001',
		jenisLayanan: 'Pengajuan Gelar (S2)',
		tanggal: '05 April 2026',
		status: 'Sedang Diproses',
		keterangan: 'Sedang penomoran SK di Subdis',
		verifikator: 'Admin A',
		updateDate: '20 Juli 2026',
		updateTime: '09.15 WIB'
	},
	{
		no: 2,
		noPengajuan: 'PDK-2026-002',
		jenisLayanan: 'Update Data Pendidikan',
		tanggal: '01 April 2026',
		status: 'Menunggu Verifikasi',
		keterangan: 'Data profil berhasil diperbaharui',
		verifikator: 'Admin A',
		updateDate: '20 Juli 2026',
		updateTime: '09.15 WIB'
	},
	{
		no: 3,
		noPengajuan: 'PDK-2026-003',
		jenisLayanan: 'Patubel Dikpitek',
		tanggal: '20 Maret 2026',
		status: 'Disetujui',
		keterangan: 'Sertifikat & SK telah diterbitkan',
		verifikator: 'Admin A',
		updateDate: '20 Juli 2026',
		updateTime: '09.15 WIB'
	},
	{
		no: 4,
		noPengajuan: 'PDK-2026-004',
		jenisLayanan: 'Duk Admin Sus Barjas',
		tanggal: '15 Februari 2026',
		status: 'Ditolak',
		keterangan: 'Berkas administrasi perlu perbaikan',
		verifikator: 'Admin A',
		updateDate: '20 Juli 2026',
		updateTime: '09.15 WIB'
	},
	{
		no: 5,
		noPengajuan: 'PDK-2026-005',
		jenisLayanan: 'Update Data Setprof',
		tanggal: '25 Januari 2026',
		status: 'Perlu Revisi',
		keterangan: 'Verifikasi kepangkatan selesai',
		verifikator: 'Admin A',
		updateDate: '20 Juli 2026',
		updateTime: '09.15 WIB'
	}
];

export type ActivityTone = 'green' | 'orange' | 'blue';

export interface ActivityItem {
	id: string;
	text: string;
	time: string;
	tone: ActivityTone;
}

export const activities: ActivityItem[] = [
	{
		id: 'a1',
		text: 'Dokumen ijazah S2 diverifikasi Admin A',
		time: 'Hari ini · 09:15 WIB',
		tone: 'green'
	},
	{
		id: 'a2',
		text: 'Surat rekomendasi satuan perlu diunggah ulang',
		time: 'Kemarin · 15:40 WIB',
		tone: 'orange'
	},
	{
		id: 'a3',
		text: 'Dokumen ijazah S2 diverifikasi Admin A',
		time: '12 April 2026 · 08:02 WIB',
		tone: 'blue'
	},
	{
		id: 'a4',
		text: 'Dokumen ijazah S2 diverifikasi Admin A',
		time: '10 April 2026 · 06:20 WIB',
		tone: 'green'
	},
	{
		id: 'a5',
		text: 'Dokumen ijazah S2 diverifikasi Admin A',
		time: '08 April 2026 · 11:25 WIB',
		tone: 'green'
	}
];

export type AnnouncementIcon = 'document' | 'exam' | 'upload' | 'check';
export type AnnouncementTone = 'purple' | 'blue' | 'orange' | 'green';

export interface AnnouncementItem {
	id: string;
	title: string;
	subtitle: string;
	date: string;
	icon: AnnouncementIcon;
	tone: AnnouncementTone;
}

export const announcements: AnnouncementItem[] = [
	{
		id: 'ijazah',
		title: 'Dokumen ijazah S2 diverifikasi Admin A',
		subtitle: 'Periode 15 Apr sampai 30 Mei 2025',
		date: '06 Apr 2026',
		icon: 'document',
		tone: 'purple'
	},
	{
		id: 'alcpt',
		title: 'Tes ALCPT Online (Mandiri)',
		subtitle: 'Jadwal fleksibel sesuai akun peserta',
		date: '02 Apr 2026',
		icon: 'exam',
		tone: 'blue'
	},
	{
		id: 'scan',
		title: 'Upload scan dokumen asli wajib PDF',
		subtitle: 'Berwarna, resolusi minimal 300 DPI',
		date: '01 Apr 2026',
		icon: 'upload',
		tone: 'orange'
	},
	{
		id: 'verifikasi',
		title: 'Verifikasi berkas ID #GD-9918 lengkap',
		subtitle: 'Admin Disdikal menyatakan dokumen lengkap',
		date: '30 Mar 2026',
		icon: 'check',
		tone: 'green'
	}
];

export interface AlcptSection {
	id: string;
	label: string;
	score: number;
}

export const alcptSections: AlcptSection[] = [
	{ id: 'listening', label: 'Listening Comprehension', score: 88 },
	{ id: 'structure', label: 'Structure & Written Expression', score: 88 },
	{ id: 'reading', label: 'Reading Comprehension', score: 88 }
];
