export const TeamSchema = {
    name: "team",
    type:"document",
    title:"Team",
    fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "designation",
          type: "string",
          title: "Designation",
        },
        {
          name: "role",
          type: "string",
          title: "Role",
        },
        {
          name: "speciality",
          type: "string",
          title: "Speciality",
        },
        {
          name: "shortNote",
          type: "text",
          title: "Short Note",
        },
        {
          name: 'doctorPic',
          type: 'image',
          title: 'Doctor DP',
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
      ]
}

export const HeadTeam ={
    name: "head",
    type:"document",
    title:"Head",
    fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
          validation: (Rule:any) => Rule.required(),
        },
        {
          name: "designation",
          type: "string",
          title: "Designation",
          validation: (Rule:any) => Rule.required(),
        },
        {
          name: "description",
          type: "text",
          title: "Description",
          validation: (Rule:any) => Rule.required().min(3).error('A description of min. 3 characters is required'),
        },
        {
          name: 'dean',
          type: 'image',
          title: 'Dean',
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
      ]
}