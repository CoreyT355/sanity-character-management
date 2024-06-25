import type { PageServerLoad } from '../../$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load = (async ({ locals: { safeGetSession, supabase } }) => {
  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/login');

  const { data: characters } = await supabase
    .from('player_character')
    .select('*')
    .eq('user_id', session.user.id)
    .order('updated_at', { ascending: false });

  return {
    characters
  };
}) satisfies PageServerLoad;

// export const actions: Actions = {
//   getCharacters: async ({ locals: { supabase, safeGetSession } }) => {
//     const { session } = await safeGetSession();

//     if (!session) redirect(303, '/auth/login');

//     const { data: characters } = await supabase
//     .from('player_character')
//     .select('*')
//     .eq('user_id', session.user.id);

//     return {
//       characters
//     };
//   }
// };
