export const MissionVisionSchema = {
    name: "mission",
    type: "document",
    title: "Mission & Vision",
    fields: [
      {
        name: "description",
        type: "string",
        title: "Description",
        validation: (Rule:any) => Rule.required(),
      },
    ],
  };