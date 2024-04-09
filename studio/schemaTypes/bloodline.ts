import { defineField, defineType } from "sanity";

export default defineType({
  name: "bloodline",
  title: "Bloodline",
  type: "document",
  icon: () => "🩸",
  groups: [
    { name: "flavor", title: "Flavor" },
    { name: "mechanics", title: "Mechanics" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      group: "flavor",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      group: "flavor",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Description",
      group: "flavor",
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: "lore",
      title: "Lore",
      group: "flavor",
      type: 'array',
      of: [{type: 'reference', to: [{type: 'keyValuePair'}]}]
    }),
    defineField({
      name: "questionsToConsider",
      title: "Questions to Consider",
      group: "flavor",
      type: 'array',
      of: [{type: 'text'}]
    }),
    defineField({
      name: "alternatePresentations",
      title: "Alternate Presentations",
      group: "flavor",
      type: 'text'
    }),
    defineField({
      name: "quote",
      title: "Quote",
      group: "flavor",
      type: 'text'
    }),
    defineField({
      name: "aspects",
      title: "Aspects",
      group: "mechanics",
      type: 'array',
      of: [{type: 'reference', to: [{type: 'aspect'}]}]
    }),
    defineField({
      name: "quickstart",
      title: "Quickstart",
      group: "mechanics",
      type: 'reference',
      to: [{type: 'quickstartRules'}]
    })
  ]
});
