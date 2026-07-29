import { z } from 'zod';

const RELIGIONS = ['Islam', 'Kristen Protestan', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'] as const;

function isAtLeast17(birthDate: Date) {
	const today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	const hasHadBirthdayThisYear =
		today.getMonth() > birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
	if (!hasHadBirthdayThisYear) age -= 1;
	return age >= 17;
}

export const registerSchema = z
	.object({
		nomorPeserta: z
			.string()
			.trim()
			.min(1, 'Nomor peserta wajib diisi')
			.regex(/^[A-Za-z0-9-]+$/, 'Nomor peserta hanya boleh huruf, angka, dan tanda hubung'),
		nik: z.string().regex(/^\d{16}$/, 'NIK harus 16 digit angka'),
		namaLengkap: z
			.string()
			.trim()
			.min(3, 'Nama lengkap minimal 3 karakter')
			.regex(/^[A-Za-z\s.']+$/, 'Nama hanya boleh huruf dan spasi'),
		jenisKelamin: z.enum(['laki-laki', 'perempuan'], { message: 'Pilih jenis kelamin' }),
		tanggalLahir: z.coerce
			.date({ message: 'Tanggal lahir tidak valid' })
			.refine(isAtLeast17, 'Usia minimal 17 tahun untuk mendaftar'),
		tempatLahir: z.string().trim().min(1, 'Tempat lahir wajib diisi'),
		agama: z.enum(RELIGIONS, { message: 'Pilih agama' }),
		email: z.string().trim().min(1, 'Email wajib diisi').email('Format email tidak valid'),
		noHp: z
			.string()
			.trim()
			.regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, 'Nomor handphone tidak valid'),
		password: z
			.string()
			.min(8, 'Password minimal 8 karakter')
			.regex(/[0-9]/, 'Password harus mengandung angka')
			.regex(/[a-z]/, 'Password harus mengandung huruf kecil')
			.regex(/[A-Z]/, 'Password harus mengandung huruf besar')
			.regex(/[^A-Za-z0-9]/, 'Password harus mengandung simbol'),
		confirmPassword: z.string(),
		agreement: z.literal('on', { message: 'Anda harus menyetujui pernyataan ini' })
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Konfirmasi password tidak cocok',
		path: ['confirmPassword']
	});

export type RegisterInput = z.infer<typeof registerSchema>;
