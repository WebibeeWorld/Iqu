export const TestimonialSchema = {
    name: "testimonial",
    type:"document",
    title:"Testimonial",
    fields: [
        {
          name: "userName",
          type: "string",
          title: "User Name",
        },
        {
          name: "review",
          type: "string",
          title: "review",
        },
        {
          name: "rating",
          type: "number",
          title: "Rating",
        },
      ]
}
