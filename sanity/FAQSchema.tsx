export const FAQSchema = {
  name: "faq",
  type: "document",
  title: "FAQ",
  fields: [
    {
      name: "question",
      type: "string",
      title: "Question",
    },
    {
      name: "answer",
      type: "string",
      title: "Answer",
    },
  ],
};
