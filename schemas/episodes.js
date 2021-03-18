export default {
  name: 'episodes',
  title: 'Episodes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'episodes',
      title: 'Episodes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'episode'}}],
    },
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}
