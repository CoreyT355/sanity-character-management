import { createClient } from '@sanity/client';
import groq from 'groq';
import type { Bloodline, Edge, Language, Origin, Post, Skill } from '$lib/types/sanity.types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { API_TOKEN } from '$env/static/private';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
  throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  token: API_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2023-03-20', // date of setup
  perspective: 'published'
});

export async function getCharacterOptions(type: string): Promise<Bloodline[] | Origin[] | Post[]> {
  return await client.fetch(groq`*[_type == $type] | order(name asc)`, {
    type
  });
}

export async function getCharacterOption(
  type: string,
  name: string
): Promise<Bloodline | Origin | Post> {
  return await client.fetch(
    groq`*[
    _type == $type &&
    name == $name][0]{
      ...,
      lore[]->,
      aspects[]->,
      quickstart->
    }`,
    {
      type,
      name
    }
  );
}

export async function getCharacterOptionNames(
  type: string
): Promise<Bloodline[] | Origin[] | Post[]> {
  return await client.fetch(groq`*[_type == $type]{ name } | order(name asc)`, {
    type
  });
}

export async function getBloodlines(): Promise<Bloodline[]> {
  return await client.fetch(groq`*[_type == "bloodline"] | order(name asc)`);
}

export async function getBloodline(name: string): Promise<Bloodline> {
  return await client.fetch(
    groq`*[
    _type == "bloodline" &&
    name == $name][0]{
      ...,
      lore[]->,
      aspects[]->
    }`,
    {
      name
    }
  );
}

export async function getOrigins(): Promise<Origin[]> {
  return await client.fetch(groq`*[_type == "origin"] | order(name asc)`);
}

export async function getOrigin(name: string): Promise<Origin> {
  return await client.fetch(groq`*[_type == "origin" && name == $name][0]`, {
    name
  });
}

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(groq`*[_type == "post"] | order(publishedAt desc)`);
}

export async function getPost(name: string): Promise<Post> {
  return await client.fetch(groq`*[_type == "post" && name == $name][0]`, {
    name
  });
}

export async function getAttributes(type: string): Promise<Edge[] | Skill[] | Language[]> {
  return await client.fetch(groq`*[_type == $type] | order(name asc)`, {
    type
  });
}

export async function getAttribute(name: string, type: string): Promise<Edge | Skill | Language> {
  return await client.fetch(groq`*[_type == $type && name == $name][0]`, {
    name,
    type
  });
}

export async function getCharactersByUser(userId: string) {
  return await client.fetch(
    groq`*[_type == 'playerCharacter']{
      _id,
      name,
      player,
      "bloodline": bloodline->name,
      "origin": origin->name,
      "post": post->name
    }`,
    {
      userId
    }
  );
}

export async function getPlayerCharacterById(id: string) {
  const playerCharacter = await client.fetch(
    groq`*[_type == 'playerCharacter' && _id == $id][0]{
      ...,
      "bloodline": bloodline->{name,_id},
      "origin": origin->{name,_id},
      "post": post->{name,_id},
      aspects[]->,
      "resources": resources[]->{name, "type": type->name, "typeId": type->_id},
      "skills": skills[]->{ranks, "name": attribute->name, "_id": attribute->_id},
      "languages": languages[]->{ranks, "name": attribute->name, "_id": attribute->_id},
      "edges": edges|order(name asc)->{name, _id}
    }`,
    {
      id
    }
  );

  return playerCharacter;
}

export async function getPlayerCharacterByName(name: string) {
  const playerCharacter = await client.fetch(
    groq`*[_type == 'playerCharacter' && name == $name][0]{
      ...,
      "bloodline": bloodline->{name,_id},
      "origin": origin->{name,_id},
      "post": post->{name,_id},
      aspects[]->,
      "resources": resources[]->{name, "type": type->name, "typeId": type->_id},
      "skills": skills[]->{ranks, "name": attribute->name, "_id": attribute->_id},
      "languages": languages[]->{ranks, "name": attribute->name, "_id": attribute->_id},
      "edges": edges|order(name asc)->{name, _id}
    }`,
    {
      name
    }
  );

  return playerCharacter;
}

export async function savePlayerCharacter(playerCharacter: PlayerCharacter) {
  return await client.createIfNotExists(playerCharacter);
}
