import type { Tables } from "./supabase-types";

export type PlayerCharacter = Tables<'player_character'>;

export type KeyRef = {
  _ref: string,
  _key: string
};

export type AttributeSkill = {
  ranks: number,
  _key: string,
  skill: {
    _ref: string
  }
};

export type AttributeLanguage = {
  ranks: number,
  _key: string,
  language: {
    _ref: string
  }
};

export type Resource = {
  text: string,
  _key: string,
  tags: Array<string>
};

// export type PlayerCharacter = {
//   _id: string,
//   name: string,
//   player: string,
//   userId: string,
//   bloodline: {
//     _ref: string,
//     _key: string
//   },
//   origin: {
//     _ref: string,
//     _key: string
//   },
//   post: {
//     _ref: string,
//     _key: string
//   },
//   edges: Array<KeyRef>,
//   skills: Array<AttributeSkill>,
//   languages: Array<AttributeLanguage>,
//   salvage: Array<string>,
//   specimens: Array<string>,
//   whispers: Array<string>,
//   charts: Array<string>,
//   majorMilestones: Array<string>,
//   minorMilestones: Array<string>,
//   drives: Array<string>,
//   mires: Array<{
//     text: string,
//     currentTrack: Array<number>
//   }>,
//   aspects: []
// };
