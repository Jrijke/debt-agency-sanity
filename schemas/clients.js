export default {
  title: "Clients",
  name: "clients",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Enter the title here",
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
      title: 'Clients',
      name: 'clients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'client'}
        }
      ],
    }
  ],
}