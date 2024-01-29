import { client } from "@/sanity/lib/client";
import { TOT } from "../TOT";
import SlugTOT from "../SlugTOT";

async function getTypes() {
  const query = `*[_type == "typesOfTherapy"]{
    smallDescription,
    "pdfFile": pdf.asset->url,
     types 
  }[0]`;
  const fetchData = await client.fetch(query);
  return fetchData;
}

export const TypesOfTherapyServer = async () => {
  const therapyType = await getTypes();
  return <TOT desc={therapyType.smallDescription}  types={therapyType.types} />;
};


export const SlugTOTServer = async () => {
  const therapyType = await getTypes();
  return (
    <SlugTOT desc={therapyType.smallDescription}  types={therapyType.types} pdfFile={therapyType.pdfFile} />
  )
}