import { defineField, defineType } from "sanity";

export default defineType({
  name: "edge",
  title: "Edge",
  type: "document",
  icon: () => '🔪',
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "displayName",
      title: "Display Name",
      type: "string"
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    })
  ]
});
