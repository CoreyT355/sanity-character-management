import { z } from 'zod';

export const resourceSchema = z.object({
  tags: z.string().array(),
  text: z.string()
});
