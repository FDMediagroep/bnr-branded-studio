export default {
  name: 'clip',
  title: 'Clip',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: 'true'
    },
  ],

  preview: {
    select: {
      title: 'title'
    }
  },
}
