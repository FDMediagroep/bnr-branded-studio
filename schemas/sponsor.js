export default {
  name: "sponsor",
  title: "Sponsor",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Naam",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
};
