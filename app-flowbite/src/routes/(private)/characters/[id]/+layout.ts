import { currentCharacter } from '$lib/store/characters.js';
import { writable } from 'svelte/store';

export const load = async ({ parent, data }) => {
  currentCharacter.set(data.characterFromSanity);

  return {
    ...(await parent()),
    ...data
    // currentCharacter: writable(data.characterFromSanity),
  };
};
