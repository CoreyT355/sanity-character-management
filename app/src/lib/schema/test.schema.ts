import { z } from 'zod';

const edgesSchema = z.object({
	'str-atr': z.number(),
	'con-atr': z.number(),
	'dex-atr': z.number(),
	'wis-atr': z.number(),
	'int-atr': z.number(),
	'chr-atr': z.number(),
});

export const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	attributes: edgesSchema,
  drives: z.string().array()
});
