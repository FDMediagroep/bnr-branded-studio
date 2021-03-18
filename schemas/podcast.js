export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
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
      name: 'color',
      title: 'Kleur',
      type: 'colorPicker'
    },
    {
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [
        {type: 'sponsor' }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  },
}
