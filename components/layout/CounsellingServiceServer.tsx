import { client } from "@/sanity/lib/client";
import CounsellingServices from "../CounsellingServices"

async function getServices() {
    const query = `*[_type == "services"]{
        title,
        smallDescription,
        "currentSlug": slug.current,
      }`;
    const fetchData = await client.fetch(query);
    return fetchData;
  }

export const CounsellingServiceServer = async () => {
    const services = await getServices();
  return (
    <CounsellingServices services = {services} />
  )
}
