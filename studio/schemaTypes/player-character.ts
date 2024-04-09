import { defineField, defineType } from "sanity";

export default defineType({
  name: "playerCharacter",
  title: "Player Character",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "bloodline",
      title: "Bloodline",
      type: 'reference',
      to: [{type: 'bloodline'}]
    }),
    defineField({
      name: "origin",
      title: "Origin",
      type: 'reference',
      to: [{type: 'origin'}]
    }), defineField({
      name: "post",
      title: "Post",
      type: 'reference',
      to: [{type: 'post'}]
    }),
    defineField({
      name: "edges",
      title: "Edges",
      type: 'array',
      of: [{type: 'reference', to: [{type: 'edge'}]}]
    }),
    defineField({
      name: "skillsAndLanguages",
      title: "Skills and Languages",
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}, {type: 'language'}]}]
    }),
    defineField({
      name: "resources",
      title: "Resources",
      type: 'array',
      of: [{type: 'reference', to: [{type: 'resource'}]}]
    }),
    defineField({
      name: "drive",
      title: "Drive",
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: "mire",
      title: "Mire",
      type: 'array',
      of: [{type: 'string'}]
    }),
  ]
});
