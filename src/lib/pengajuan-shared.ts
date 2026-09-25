export type RiwayatStatus = 'Disetujui' | 'Dalam Proses' | 'Ditolak';

export const RIWAYAT_STATUSES: RiwayatStatus[] = ['Disetujui', 'Dalam Proses', 'Ditolak'];

export type BadgeTone = 'green' | 'orange' | 'red' | 'blue';

export const STATUS_TONE: Record<string, BadgeTone> = {
	Disetujui: 'green',
	Tersedia: 'green',
	Terverifikasi: 'green',
	'Dalam Proses': 'orange',
	'Dalam Pemeriksaan': 'orange',
	Ditolak: 'red'
};

export interface DetailField {
	label: string;
	value: string;
}

export interface DetailStep {
	title: string;
	date: string;
	desc: string;
}

export type DetailDokumenStatus = 'Dalam Pemeriksaan' | 'Terverifikasi';

export interface DetailDokumen {
	no: number;
	nama: string;
	keterangan: string;
	fileName: string;
	fileSize: string;
	tanggal: string;
	jam: string;
	status: DetailDokumenStatus;
}
