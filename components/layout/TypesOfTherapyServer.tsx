import { client } from "@/sanity/lib/client";
import { TOT } from "../TOT";

async function getTypes() {
  const query = `*[_type == "typesOfTherapy"]{
    title
  }`;
  const fetchData = await client.fetch(query);
  
  return fetchData;
}

export const TypesOfTherapyServer = async () => {
  const types = await getTypes();
  return <TOT types={types} />;
};
