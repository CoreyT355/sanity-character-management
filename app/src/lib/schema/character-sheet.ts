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

export const characterSheetSchema = z.object({
  name: z.string().min(3).max(100),
  player: z.string().min(3).max(100),
  bloodline: bloodlinesEnum.default(''),
  origin: originsEnum.default(''),
  post: postsEnum.default(''),
  edges: z.number().max(3),
  skillsAndLanguages: z.number().max(15)
});