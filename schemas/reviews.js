export default {
  title: "Reviews",
  name: "reviews",
  type: "document",
  fields: [
    {
      title: "Review",
      name: "review",
      type: "string",
      description: "Enter the review here",
    },
    {
      title: "Reviewer",
      name: "reviewer",
      type: "string",
      description: "Enter the name of the reviewer here",
    },
    {
      title: "Reviewer's role",
      name: "role",
      type: "string",
      description: "Enter the the reviewer's role here",
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
  ],
}