import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Edge, Language, Skill } from '$lib/types/sanity.types';
import { getAttributes, getCharacterOptions } from '$lib/server/sanity';

const bloodlines = await getCharacterOptions('bloodline');
const origins = await getCharacterOptions('origin');
const posts = await getCharacterOptions('post');

const edges: Edge[] = (await getAttributes('edge')) as Edge[];
const languages: Language[] = (await getAttributes('language')) as Language[];
const skills: Skill[] = (await getAttributes('skill')) as Skill[];

export const load = (async ({ locals: { safeGetSession } }) => {
  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/login');

  return {
    bloodlines,
    edges,
    languages,
    origins,
    posts,
    skills,
  };
}) satisfies LayoutServerLoad;
