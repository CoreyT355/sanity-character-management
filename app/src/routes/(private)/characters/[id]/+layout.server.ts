import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Database } from '$lib/types/supabase-types';

export const load = (async ({ params, locals: { supabase, safeGetSession } }) => {
  // if (!params.id) {
  //   throw error(404, 'Not found');
  // }

  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/login');

  let playerCharacterSupabase: Database['public']['Tables']['player_character']['Row'];

  ({ data: playerCharacterSupabase } = await supabase
    .from('player_character')
    .select(`*, player_character_resources (*)`)
    .eq('id', params.id)
    .eq('user_id', session?.user.id)
    .single());

  const characterToReturn = {
    ...playerCharacterSupabase,
    salvage: playerCharacterSupabase['player_character_resources'].filter((r) => r.type === 'salvage'),
    specimens: playerCharacterSupabase['player_character_resources'].filter((r) => r.type === 'specimens'),
    whispers: playerCharacterSupabase['player_character_resources'].filter((r) => r.type === 'whispers'),
    charts: playerCharacterSupabase['player_character_resources'].filter((r) => r.type === 'charts'),
    cargo: playerCharacterSupabase['player_character_resources'].filter((r) => r.type === 'cargo')
  };

  return {
    character: characterToReturn
  };
}) satisfies LayoutServerLoad;
