export const KnowMoreSchema = {
    name: "video",
    type: "document",
    title: "Video URL",
    fields: [
      {
        name: "video",
        type: "file",
        title: "Video Upload",
        options : {
          accept: "video/*"
        }
      }
    ],
    validation: (Rule : any) => Rule.required(),
  };
  