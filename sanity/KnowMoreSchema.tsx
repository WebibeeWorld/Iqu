export const KnowMoreSchema = {
    name: "video",
    type: "document",
    title: "Video URL",
    fields: [
      {
        name: "video",
        type: "file",
        title: "Video Upload",
        validation: (Rule:any) => Rule.required(),
        options : {
          accept: "video/*"
        }
      }
    ],
  };
  