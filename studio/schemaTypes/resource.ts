import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  icon: () => '🔪',
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "reference",
      to: [{type: 'resourceType'}]
    }),
    defineField({
      name: "tags",
      title: "Tag(s)",
      type: "array",
      of: [{type: 'reference', to: [{type: 'keyValuePair'}]}]
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    })
  ]
});
