import { fail } from '@sveltejs/kit';
import { asc } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { task } from '$lib/server/db/schema';
import { taskInsertSchema } from '$lib/schemas/task';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const tasks = await db.select().from(task).orderBy(asc(task.priority), asc(task.id));
	return { tasks };
};

export const actions: Actions = {
	create: async ({ request }) => {
		const form = await request.formData();
		const parsed = taskInsertSchema.safeParse({
			title: form.get('title'),
			priority: form.get('priority')
		});

		if (!parsed.success) {
			return fail(400, {
				values: { title: String(form.get('title') ?? ''), priority: form.get('priority') },
				errors: z.flattenError(parsed.error).fieldErrors
			});
		}

		await db.insert(task).values(parsed.data);
		return { success: true };
	}
};
