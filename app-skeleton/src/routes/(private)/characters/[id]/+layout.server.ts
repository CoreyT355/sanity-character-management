import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Edge, Language, Skill } from '$lib/types/sanity.types';
import { getAttributes, getCharacterOptions } from '$lib/server/sanity';
import type { Database } from '$lib/types/supabase-types';

const bloodlines = await getCharacterOptions('bloodline');
const origins = await getCharacterOptions('origin');
const posts = await getCharacterOptions('post');

const edges: Edge[] = (await getAttributes('edge')) as Edge[];
const languages: Language[] = (await getAttributes('language')) as Language[];
const skills: Skill[] = (await getAttributes('skill')) as Skill[];

export const load = (async ({ params, locals: { supabase, safeGetSession } }) => {
  if (!params.id) {
    throw error(404, 'Not found');
  }

  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/login');

  let playerCharacterSupabase: Database['public']['Tables']['player_character']['Row'];

  if (params.create) {
    playerCharacterSupabase = {
      cargo: [],
      charts: [],
      created_at: null,
      drives: [],
      edges: {},
      id: params.id,
      languages: {},
      major_milestones: [],
      minor_milestones: [],
      mires: [],
      name: '',
      player: '',
      salvage: [],
      skills: {},
      specimens: [],
      updated_at: null,
      user_id: session?.user.id,
      whispers: []
    };
  } else {
    ({ data: playerCharacterSupabase } = await supabase
      .from('player_character')
      .select('*')
      .eq('id', params.id)
      .eq('user_id', session?.user.id)
      .single());
  }

  return {
    bloodlines,
    edges,
    languages,
    origins,
    posts,
    skills,
    character: playerCharacterSupabase
  };
}) satisfies LayoutServerLoad;
