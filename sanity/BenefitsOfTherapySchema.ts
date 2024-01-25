export const BenefitsOfTherapySchema = {
  name: "therapy",
  type: "document",
  title: "Benefits Of Therapy",
  fields: [
    {
      name: "gallery",
      type: "array",
      title: "Gallery",
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
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
