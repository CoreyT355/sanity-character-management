import { z } from 'zod';

const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const aspectSchema = z.object({
  id: z.string().regex(guidRegex).optional(),
  player_character_id: z.string().regex(guidRegex),
  name: z.string(),
  description: z.string(),
  updated_at: z.string(),
  type: z.string(),
  track_length: z.number().min(1),
  current_track: z.number().array().default([]),
  is_complex: z.boolean()
});
