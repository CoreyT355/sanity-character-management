import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profileAttribute',
  title: 'Profile Attribute',
  type: 'document',
  fields: [
    defineField({
      name: 'attribute',
      title: 'Attribute',
      type: 'reference',
      to: [{type: 'skill'}, {type: 'language'}],
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
    }),
  ],
})