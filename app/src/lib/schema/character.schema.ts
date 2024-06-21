import { z } from 'zod';
import { resourceSchema } from './resource.schema';
import { guidRegex } from '$lib/utils/utils';

const edgesSchema = z.object({
  'import-edge-iron': z.number(),
  'import-edge-grace': z.number(),
  'import-edge-teeth': z.number(),
  'import-edge-tides': z.number(),
  'import-edge-veils': z.number(),
  'import-edge-sharps': z.number(),
  'import-edge-instinct': z.number()
});

const languagesSchema = z.object({
  'import-language-knock': z.number(),
  'import-language-raolin': z.number(),
  'import-language-gaudimm': z.number(),
  'import-language-highvin': z.number(),
  'import-language-lowsour': z.number(),
  'import-language-oldhand': z.number(),
  'import-language-saprekk': z.number(),
  'import-language-chthonic': z.number(),
  'import-language-lyrebite': z.number(),
  'import-language-rakaspit': z.number(),
  'import-language-signalling': z.number(),
  'import-language-brasstongue': z.number()
});

const skillsSchema = z.object({
  'import-skill-cook': z.number(),
  'import-skill-hack': z.number(),
  'import-skill-hunt': z.number(),
  'import-skill-sway': z.number(),
  'import-skill-tend': z.number(),
  'import-skill-brace': z.number(),
  'import-skill-break': z.number(),
  'import-skill-delve': z.number(),
  'import-skill-sense': z.number(),
  'import-skill-study': z.number(),
  'import-skill-vault': z.number(),
  'import-skill-outwit': z.number(),
  'import-skill-rattle': z.number(),
  'import-skill-concoct': z.number(),
  'import-skill-harvest': z.number(),
  'import-skill-flourish': z.number(),
  'import-skill-scavenge': z.number(),
  'import-skill-wavewalk': z.number()
});

const mireSchema = z.object({
  text: z.string(),
  currentTrack: z.number().array()
});

export const characterSheetSchema = z.object({
  id: z.string().regex(guidRegex).optional(),
  user_id: z.string().regex(guidRegex).optional(),
  name: z.string().min(2, { message: 'Must be at least 2 characters long.' }),
  player: z.string().min(2, { message: 'Must be at least 2 characters long.' }),
  // created_at: z.string(),
  updated_at: z.string(),
  bloodline: z.string(),
  origin: z.string(),
  post: z.string(),
  drives: z.string().array(),
  edges: edgesSchema,
  languages: languagesSchema,
  skills: skillsSchema,
  mires: mireSchema.array(),
  major_milestones: z.string().array(),
  minor_milestones: z.string().array(),
  player_character_resources: resourceSchema.array().default([])
});
