import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'characterAspect',
  title: 'Character Aspect',
  type: 'document',
  icon: () => '🔮',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'trackLength',
      title: 'Track Length',
      type: 'number',
    }),
    defineField({
      name: 'currentTRack',
      title: 'Current Track',
      type: 'array',
      of: [{type: 'number'}],
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Companion', value: 'companion'},
          {title: 'Gear', value: 'gear'},
          {title: 'Trait', value: 'trait'},
        ],
      },
    }),
    defineField({
      name: 'isComplex',
      title: 'Complex Track?',
      type: 'boolean',
    }),
  ],
})
