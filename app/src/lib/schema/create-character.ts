import { z } from 'zod';
import { getCharacterOptionNames } from '$lib/utils/sanity';

const bloodlines = await getCharacterOptionNames('bloodline').then((bloodlines) => {
  return bloodlines.map((bloodline) => bloodline.name);
});
const origins = await getCharacterOptionNames('origin').then((origins) => {
  return origins.map((origin) => origin.name);
});
const posts = await getCharacterOptionNames('post').then((posts) => {
  return posts.map((post) => post.name);
});

const bloodlinesEnum = z.enum(bloodlines);
const originsEnum = z.enum(origins);
const postsEnum = z.enum(posts);

export const characterSchemaStep1 = z.object({
  name: z.string().min(3).max(100),
  characterType: z.enum(['freeform', 'quickStart']).default('freeform')
});

export const characterSchemaStep2 = characterSchemaStep1.extend({
  // these need to be an enum of bloodline names somehow
  bloodline: bloodlinesEnum.default('')
});

export const characterSchemaStep3 = characterSchemaStep2.extend({
  origin: originsEnum.default('')
});

export const characterSchemaStep4 = characterSchemaStep3.extend({
  post: postsEnum.default('')
});
