export default {
  title: "Headlines",
  name: "headlines",
  type: "document",
  fields: [
    {
      title: "Headline title",
      name: 'title',
      type: 'array',
      of: [{type: 'block'}],
      description: "Enter the title of the headline here",
    },
    {
      title: "Category",
      name: "category",
      type: "string",
      description: "Enter the category here",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      description: "Enter description here",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "bookname",
        maxLength: 96,
      },
    },
    {
      title: "Headline image",
      name: "headlineimage",
      type: "image",
      description: "Upload headline image here",
      options: {
        hotspot: true,
      },
    },
  ],
}