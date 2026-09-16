import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().trim().min(1, 'Email wajib diisi').email('Format email tidak valid'),
	password: z.string().min(1, 'Password wajib diisi'),
	// Kecocokan dengan kode yang ditampilkan dicek di onUpdate, bukan di sini:
	// kode benarnya adalah state runtime komponen, bukan bagian dari payload.
	captcha: z.string().trim().min(1, 'Kode keamanan wajib diisi'),
	remember: z.boolean().default(false)
});

export type LoginInput = z.infer<typeof loginSchema>;
