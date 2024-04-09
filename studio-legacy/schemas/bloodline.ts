import { defineField, defineType } from "sanity";

export default defineType({
  name: "bloodline",
  title: "Bloodline",
  type: "document",
  groups: [
    { name: "flavor", title: "Flavor" },
    { name: "mechanics", title: "Mechanics" },
  ],
  fields: [
    // defineField({
    //   name: "type",
    //   title: "Type",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Bloodline", value: "bloodline" },
    //       { title: "Origin", value: "origin" },
    //       { title: "Post", value: "post" },
    //     ]
    //   }
    // }),
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
  ]
});
