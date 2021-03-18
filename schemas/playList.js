export default {
  name: 'playList',
  title: 'Playlist',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: 'true'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      readOnly: 'true'
    },
    {
      name: 'podcast',
      title: 'Podcast',
      type: 'reference',
      to: {type: 'podcast'},
      readOnly: 'true'
    },
  ],

  preview: {
    select: {
      title: 'title'
    }
  },
}
