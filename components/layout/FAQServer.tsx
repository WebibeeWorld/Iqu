import { client } from "@/sanity/lib/client";
import FAQ from "../FAQ"

async function getFaq() {
    const query = `*[_type == "faq"]{
        question,
        answer
    }`;
    const fetchData = await client.fetch(query);
    return fetchData;
  }

export const FAQServer = async () => {
    const faq = await getFaq()
    
  return (
    <FAQ faq={faq} />
  )
}
