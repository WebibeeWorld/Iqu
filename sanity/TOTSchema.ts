export const TOTSchema = {
    name: "typesOfTherapy",
    type: "document",
    title: "Types of Counselling",
    fields: [
      {
        name: "smallDescription",
        type: "string",
        title: "Small Description",
        // validation: (Rule:any) => [
        //   Rule.required().min(3).error('A Description of min. 3 characters is required'),
        //   // Rule.max(100).warning('Shorter Description are usually better')
        // ]
      },
      {
        name: "pdf",
        type: "file",
        title: "PDF File Upload",
        // validation: (Rule:any) => Rule.required().max(1),
        options : {
          accept: ".pdf"
        }
      },
      {
        name: "types",
        type: "array",
        title: "Therapy Types",
        // validation: (Rule:any) => Rule.required().min(1),
        of: [
          {
            type: "string",
            // validation: (Rule:any) => Rule.required()
          },
        ],
      },
    ],
  };
  