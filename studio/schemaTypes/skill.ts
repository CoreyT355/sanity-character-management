import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: () => '🧠',
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "exampleUses",
      title: "Example Uses",
      type: 'array',
      of: [{type: 'text'}]
    }),
  ],
});
