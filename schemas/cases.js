export default {
  title: "Cases",
  name: "cases",
  type: "document",
  fields: [
    {
      title: "Case title",
      name: "title",
      type: "string",
      description: "Enter the title of the case here",
    },
    {
      title: "Variant",
      name: "variant",
      description: "Choose a variant",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Column", value: "column" },
          { title: "Full width", value: "full-width" },
        ],
      },
      initialValue: "column",
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
      title: "Case image",
      name: "caseimage",
      type: "image",
      description: "Upload case image here",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'task'}
        }
      ],
    }
  ],
}