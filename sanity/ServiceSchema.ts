export const ServiceSchema = {
    name: "services",
    type:"document",
    title:"Services",
    fields: [
        {
          name: "title",
          type: "string",
          title: "Service Name",
        },
        {
          name: "smallDescription",
          type: "string",
          title: "Small Description",
        },
        {
          name: "mainDescription",
          type: "string",
          title: "Main Description",
        },
        {
          name: "para1",
          type: "string",
          title: "paragraph 1",
        },
        {
          name: "para2",
          type: "text",
          title: "paragraph 2",
        },
        {
          name: 'serviceImage',
          type: 'image',
          title: 'Service Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ]
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: 'title',
                maxLength: 50,
                slugify: (input : any) => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
              }
          },
      ]
}
