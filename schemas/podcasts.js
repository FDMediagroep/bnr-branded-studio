export default {
  name: 'podcasts',
  title: 'Podcasts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'podcasts',
      title: 'Podcasts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'podcast'}}],
    },
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}
