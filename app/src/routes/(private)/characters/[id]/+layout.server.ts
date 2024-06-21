import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ params, locals: { supabase, safeGetSession } }) => {
  // if (!params.id) {
  //   throw error(404, 'Not found');
  // }

  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/login');

  const { data } = await supabase
    .from('player_character')
    .select(`*, player_character_resources (*)`)
    .eq('id', params.id)
    .eq('user_id', session?.user.id)
    .single();

  const characterToReturn = {
    ...data,
    salvage: data.player_character_resources.filter((r) => r.type === 'salvage'),
    specimens: data.player_character_resources.filter((r) => r.type === 'specimens'),
    whispers: data.player_character_resources.filter((r) => r.type === 'whispers'),
    charts: data.player_character_resources.filter((r) => r.type === 'charts'),
    cargo: data.player_character_resources.filter((r) => r.type === 'cargo')
  };

  return {
    character: characterToReturn
  };
}) satisfies LayoutServerLoad;
