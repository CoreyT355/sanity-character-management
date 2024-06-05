import { z } from 'zod';

const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

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

const resourceSchema = z.object({
  text: z.string(),
  tags: z.string().array()
});

export const characterSheetSchema = z.object({
  id: z.string().regex(guidRegex).optional(),
  user_id: z.string().regex(guidRegex),
  name: z.string(),
  player: z.string(),
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
  salvage: resourceSchema.array().default([]),
  specimens: resourceSchema.array(),
  whispers: resourceSchema.array(),
  charts: resourceSchema.array(),
  cargo: resourceSchema.array(),
  major_milestones: z.string().array(),
  minor_milestones: z.string().array()
});
