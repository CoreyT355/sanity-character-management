import type { PageServerLoad } from '../../../$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ params, locals: { safeGetSession, supabase } }) => {
  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/account');

  const { data: aspects } = await supabase
    .from('aspects')
    .select('*')
    .eq('player_character_id', params.id);

  return {
    aspects
  };
}) satisfies PageServerLoad;
