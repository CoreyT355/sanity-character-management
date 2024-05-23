import type { PageServerLoad } from '../../$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals: { safeGetSession, supabase } }) => {
  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/account');

  const userId = session.user.id;

  const { data: characters } = await supabase
    .from('player_character')
    .select('*')
    .eq('user_id', userId);

  return {
    characters
  };
}) satisfies PageServerLoad;
