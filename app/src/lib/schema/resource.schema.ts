import { guidRegex } from '$lib/utils/utils';
import { z } from 'zod';

export const resourceSchema = z.object({
  id: z.string().regex(guidRegex).optional(),
  player_character_id: z.string().regex(guidRegex),
  tags: z.string().array(),
  text: z.string(),
  type: z.enum(["cargo", "charts", "salvage", "specimens", "whispers"])
});
