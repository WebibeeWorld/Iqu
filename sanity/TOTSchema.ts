export const TOTSchema = {
    name: "typesOfTherapy",
    type: "document",
    title: "Types Of Therapy",
    fields: [
      {
        name: "smallDescription",
        type: "string",
        title: "Small Description",
      },
      {
        name: "pdf",
        type: "file",
        title: "PDF File Upload",
        options : {
          accept: ".pdf"
        }
      },
      {
        name: "types",
        type: "array",
        title: "Therapy Types",
        of: [
          {
            type: "string",
          },
        ],
      },
    ],
    validation: (Rule : any) => Rule.required(),
  };
  