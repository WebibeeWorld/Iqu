export const TestimonialSchema = {
    name: "testimonial",
    type:"document",
    title:"Testimonial",
    fields: [
        {
          name: "userName",
          type: "string",
          title: "User Name",
          validation: (Rule:any) => [
            Rule.required().min(10).error('A title of min. 10 characters is required'),
            Rule.max(50).warning('Shorter titles are usually better')
          ]
        },
        {
          name: "review",
          type: "string",
          title: "review",
          validation: (Rule:any) => [
            Rule.required().min(3).error('A review of min. 3 characters is required'),
            Rule.max(100).warning('Shorter review are usually better')
          ]
        },
        {
          name: "rating",
          type: "number",
          title: "Rating",
          validation: (Rule:any) => Rule.required().min(1).max(5)
        },
      ],
}
