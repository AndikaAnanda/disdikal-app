import { z } from 'zod';
import { docField } from './file';

export const JENJANG_DIK = [
	'D3',
	'D4 - Sarjana Terapan',
	'S1 - Sarjana',
	'S2 - Magister',
	'S3 - Doktor'
] as const;

export const dataDikSchema = z.object({
	personelId: z.string().min(1, 'Pilih personel terlebih dahulu'),

	jenisPendidikan: z.enum(['', ...JENJANG_DIK]).refine((v) => v !== '', 'Pilih jenjang pendidikan'),
	fakultas: z.string().trim().min(1, 'Fakultas wajib diisi'),
	programStudi: z.string().trim().min(1, 'Program studi wajib diisi'),
	tahunLulus: z.string().regex(/^(19|20)\d{2}$/, 'Tahun lulus tidak valid'),
	namaPerguruanTinggi: z.string().min(1, 'Pilih perguruan tinggi'),
	gelar: z.string().trim().default(''),

	ijazah: docField(),
	transkrip: docField(),
	suratKeteranganLulus: docField(),
	sertifikatPendukung: docField(),
	dokumenLainnyaNama: z.string().trim().default(''),
	dokumenLainnya: docField(),
	dokumenTambahan: z
		.array(z.object({ nama: z.string().trim().default(''), file: docField() }))
		.default([])
});

export type DataDikInput = z.infer<typeof dataDikSchema>;
