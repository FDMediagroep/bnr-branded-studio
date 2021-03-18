export default {
  name: 'articles',
  title: 'Articles',
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
      of: [{type: 'reference', to: {type: 'article'}}],
    },
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}
