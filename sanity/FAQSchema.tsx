export const FAQSchema = {
  name: "faq",
  type: "document",
  title: "FAQ",
  fields: [
    {
      name: "question",
      type: "string",
      title: "Question",
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: "answer",
      type: "string",
      title: "Answer",
      validation: (Rule:any) => Rule.required(),
    },
  ],
};
