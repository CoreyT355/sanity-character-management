import { writable } from 'svelte/store';

export const isEditing = writable(false);

export const isDrawerHidden = writable(true);

export const currentCharacter = writable({});