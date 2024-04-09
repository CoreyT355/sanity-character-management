import { defineField, defineType } from "sanity";

export default defineType({
  name: "language",
  title: "Language",
  type: "document",
  icon: () => "🗣",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "lore",
      title: "Lore",
      type: "string"
    })
  ]
});
