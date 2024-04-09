import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "uses",
      title: "Uses",
      type: 'array',
      of: [{type: 'text'}]
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: 'array',
      of: [{type: 'reference', to: [{type: 'keyValuePair'}]}]
    }),
    defineField({
      name: "examples",
      title: "Examples",
      type: 'array',
      of: [{type: 'string'}]
    })
  ],
});
