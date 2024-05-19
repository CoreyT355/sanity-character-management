import type { PlayerCharacter } from '$lib/types/sanity.types';
import { getCharactersByUser } from '$lib/server/sanity';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals: { safeGetSession } }) => {
  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/account');

  const userId = session.user.id;

  const characters: PlayerCharacter[] = await getCharactersByUser(userId);

  return {
    characters
  };
}) satisfies PageServerLoad;
