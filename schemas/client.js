export default {
  title: "client",
  name: "client",
  type: "document",
  fields: [
    {
      title: "Client",
      name: "clientName",
      type: "string",
      description: "Enter the client's name here",
    },
    {
      title: "client logo",
      name: "clientLogo",
      type: "image",
      description: "Upload client's logo here",
      options: {
        hotspot: true,
      },
    },
  ],
}