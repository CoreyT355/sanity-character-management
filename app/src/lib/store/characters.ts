import type { PlayerCharacterV2 } from '$lib/types/sanity.types';
import { writable, type Writable } from 'svelte/store';

export const isEditing = writable(false);

export const isDrawerHidden = writable(true);

// export const currentCharacter: Writable<PlayerCharacterV2> = writable({
  
// });
