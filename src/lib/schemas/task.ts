import { z } from 'zod';

export const taskInsertSchema = z.object({
	title: z.string().trim().min(1, 'Judul wajib diisi').max(200, 'Judul maksimal 200 karakter'),
	priority: z.coerce.number().int().min(1, 'Prioritas minimal 1').max(5, 'Prioritas maksimal 5')
});

export type TaskInput = z.infer<typeof taskInsertSchema>;
