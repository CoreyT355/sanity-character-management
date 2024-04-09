import { defineField, defineType } from "sanity";

export default defineType({
  name: "quickstartRules",
  title: "Quickstart Rules",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "edges",
      title: "Edges",
      type: 'array',
      of: [{type: 'reference', to: [{type: 'edge'}]}],
      validation: (rule) => rule.custom((value) => {
        if (value && value.length > 3) {
          return 'You can only select three edges';
        }
        return true;
      })
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
