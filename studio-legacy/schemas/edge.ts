import { defineField, defineType } from "sanity";

export default defineType({
  name: "edge",
  title: "Edge",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
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
