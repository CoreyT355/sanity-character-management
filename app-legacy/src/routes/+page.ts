import { getBloodlines } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const bloodlines = await getBloodlines();

	if (bloodlines) {
		return {
			bloodlines
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
