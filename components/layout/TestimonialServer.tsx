import { client } from "@/sanity/lib/client";
import Testimonials from "../Testimonials";

async function getTestimonials() {
  const query = `*[_type == "testimonial"]{
        userName,
        rating,
        review
      }`;
  const fetchData = await client.fetch(query);
  return fetchData;
}
export const TestimonialServer = async () => {
  const testimonial = await getTestimonials();

  return <Testimonials testimonial={testimonial} />;
};
