import { z } from 'zod';
import { docField } from './file';

export const JENIS_PENGAJUAN = ['Penetapan Gelar', 'Penggunaan Gelar'] as const;

export const JENJANG_PENDIDIKAN = ['S1 - Sarjana', 'S2 - Magister', 'S3 - Doktor'] as const;

export const gunGelarSchema = z.object({
	jenisPengajuan: z.enum(['', ...JENIS_PENGAJUAN]).refine((v) => v !== '', 'Pilih jenis pengajuan'),
	jenjangPendidikan: z
		.enum(['', ...JENJANG_PENDIDIKAN])
		.refine((v) => v !== '', 'Pilih jenjang pendidikan'),
	programStudi: z.string().trim().min(1, 'Program studi wajib diisi'),
	namaGelar: z.string().trim().min(1, 'Nama gelar wajib diisi'),
	namaPerguruanTinggi: z.string().trim().min(1, 'Nama perguruan tinggi wajib diisi'),
	nomorIjazah: z.string().trim().min(1, 'Nomor ijazah wajib diisi'),
	tahunMasuk: z.string().regex(/^(19|20)\d{2}$/, 'Tahun masuk tidak valid'),
	tanggalLulus: z.string().min(1, 'Tanggal lulus wajib diisi'),

	ijazah: docField(),
	transkrip: docField(),
	suratKeteranganLulus: docField(),
	dokumenLainnyaNama: z.string().trim().default(''),
	dokumenLainnya: docField(),
	dokumenTambahan: z
		.array(z.object({ nama: z.string().trim().default(''), file: docField() }))
		.default([]),

	pernyataan: z.boolean().refine((v) => v === true, 'Anda harus menyetujui pernyataan ini')
});

export type GunGelarInput = z.infer<typeof gunGelarSchema>;
