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
        },
        {
          name: "designation",
          type: "string",
          title: "Designation",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: 'dean',
          type: 'image',
          title: 'Dean',
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