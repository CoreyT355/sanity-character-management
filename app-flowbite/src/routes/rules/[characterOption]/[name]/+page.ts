import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getCharacterOption } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
  const bloodline = await getCharacterOption(params.characterOption, params.name);

  if (bloodline) return bloodline;

  throw error(404, 'Not found');
}) satisfies PageLoad;
