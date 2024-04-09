import type { PlayerCharacter } from '$lib/types/sanity.types';
import { writable } from 'svelte/store';

const defaultCharacter: PlayerCharacter = {  _type: 'playerCharacter',
  _id: '',
  _rev: '',
  _createdAt: '',
  _updatedAt: '',
  name: '',
  bloodline: {_type: 'reference', _ref: ''},
  origin: {_type: 'reference', _ref: ''},
  post: {_type: 'reference', _ref: ''},
  edges: [],
  skillsAndLanguages: [],
  resources: [],
  drive: [],
  mire: []
};

export const characterBuilder = writable<PlayerCharacter>(defaultCharacter);