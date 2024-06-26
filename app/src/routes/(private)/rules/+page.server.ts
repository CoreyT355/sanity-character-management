import { getCharacterOptions } from '$lib/server/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load = (async () => {
  const bloodlines = await getCharacterOptions('bloodline');
  const origins = await getCharacterOptions('origin');
  const posts = await getCharacterOptions('post');

  if (bloodlines && origins && posts) {
    return {
      bloodlines,
      origins,
      posts
    };
  }

  throw error(404, 'Not found');
}) satisfies PageServerLoad;
