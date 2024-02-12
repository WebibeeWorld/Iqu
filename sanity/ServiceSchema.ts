export const ServiceSchema = {
    name: "services",
    type:"document",
    title:"Services",
    fields: [
        {
          name: "title",
          type: "string",
          title: "Service Name",
          validation: (Rule:any) => Rule.required(),
        },
        {
          name: "smallDescription",
          type: "string",
          title: "Small Description",
          validation: (Rule:any) => Rule.required(),
        },
        {
          name: "mainDescription",
          type: "string",
          title: "Main Description",
          validation: (Rule:any) => Rule.required(),
        },
        {
          name: "para1",
          type: "string",
          title: "paragraph 1",
          validation: (Rule:any) => Rule.required(),
        },
        {
          name: "para2",
          type: "text",
          title: "paragraph 2",
          validation: (Rule:any) => Rule.required(),
        },
        {
          name: 'serviceImage',
          type: 'image',
          title: 'Service Image',
          validation: (Rule:any) => Rule.required(),
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: (Rule:any) => Rule.required(),
            },
          ]
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            validation: (Rule:any) => Rule.required(),
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
