import { writable } from 'svelte/store';

import type { PlayerCharacter } from '$lib/types/types';

export const isEditing = writable(false);

export const isDrawerHidden = writable(true);

export const characterList = writable(Array<PlayerCharacter>());

export const currentCharacter = writable({
  id: '',
  user_id: '',
  name: '',
  player: '',
  updated_at: '',
  bloodline: '',
  origin: '',
  post: '',
  drives: [],
  edges: {
    'import-edge-iron': 0,
    'import-edge-grace': 0,
    'import-edge-teeth': 0,
    'import-edge-tides': 0,
    'import-edge-veils': 0,
    'import-edge-sharps': 0,
    'import-edge-instinct': 0
  },
  languages: {
    'import-language-knock': 0,
    'import-language-raolin': 0,
    'import-language-gaudimm': 0,
    'import-language-highvin': 0,
    'import-language-lowsour': 0,
    'import-language-oldhand': 0,
    'import-language-saprekk': 0,
    'import-language-chthonic': 0,
    'import-language-lyrebite': 0,
    'import-language-rakaspit': 0,
    'import-language-signalling': 0,
    'import-language-brasstongue': 0
  },
  skills: {
    'import-skill-cook': 0,
    'import-skill-hack': 0,
    'import-skill-hunt': 0,
    'import-skill-sway': 0,
    'import-skill-tend': 0,
    'import-skill-brace': 0,
    'import-skill-break': 0,
    'import-skill-delve': 0,
    'import-skill-sense': 0,
    'import-skill-study': 0,
    'import-skill-vault': 0,
    'import-skill-outwit': 0,
    'import-skill-rattle': 0,
    'import-skill-concoct': 0,
    'import-skill-harvest': 0,
    'import-skill-flourish': 0,
    'import-skill-scavenge': 0,
    'import-skill-wavewalk': 0
  },
  mires: [],
  salvage: [],
  specimens: [],
  whispers: [],
  charts: [],
  cargo: [],
  major_milestones: [],
  minor_milestones: []
});