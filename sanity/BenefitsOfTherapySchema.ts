export const BenefitsOfTherapySchema = {
  name: "therapy",
  type: "document",
  title: "Benefits Of Therapy",
  fields: [
    {
      name: "gallery",
      type: "array",
      title: "Gallery",
      validation: (Rule:any) => Rule.required(),
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      validation: (Rule:any) => Rule.required(),
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
