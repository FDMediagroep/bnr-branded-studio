export default {
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    {
      name: 'playList',
      title: 'Playlist',
      type: 'reference',
      to: {type: 'playList'},
      readOnly: 'true'
    },
    {
      name: 'clip',
      title: 'Clip',
      type: 'reference',
      to: {type: 'clip'},
      readOnly: 'true'
    },
  ],

  preview: {
    select: {
      title: 'clip.title',
      subtitle: 'playList.title'
    }
  },
}
