import type { PlayerCharacter } from "$lib/types/sanity.types";
import { getCharactersByUser } from "$lib/server/sanity";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const characters: PlayerCharacter[] = await getCharactersByUser('1');

  return {
    characters
  }
}) satisfies PageServerLoad;
