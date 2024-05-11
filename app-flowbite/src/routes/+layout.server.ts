import type { Edge, Language, Skill } from "$lib/types/sanity.types";
import { getAttributes, getCharacterOptions } from "$lib/server/sanity";
import type { LayoutServerLoad } from "./$types";

const bloodlines = await getCharacterOptions('bloodline');
const origins = await getCharacterOptions('origin');
const posts = await getCharacterOptions('post');

const edges: Edge[] = (await getAttributes('edge')) as Edge[];
const languages: Language[] = (await getAttributes('language')) as Language[];
const skills: Skill[] = (await getAttributes('skill')) as Skill[];

export const load = (async ({ url }) => {
  return {
    bloodlines,
    edges,
    languages,
    origins,
    posts,
    skills,
    url: url.pathname
  }
}) satisfies LayoutServerLoad;
