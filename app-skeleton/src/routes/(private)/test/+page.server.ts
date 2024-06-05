import type { Actions, PageServerLoad } from './$types.js';

import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { schema } from '$lib/schema/test.schema.js';

export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod(schema)) };
};

export const actions: Actions = {
  save: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);

		if (!form.valid) return fail(400, { form });

		return message(form, 'Form posted successfully!');
	}
};
