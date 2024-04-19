import { getCharacterOptions } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load = (async () => {
  const bloodlines = await getCharacterOptions('bloodline');
  const origins = await getCharacterOptions('origin');
  const posts = await getCharacterOptions('post');

  if (bloodlines) {
    return {
      bloodlines,
      origins,
      posts
    };
  }

  throw error(404, 'Not found');
}) satisfies PageLoad;
