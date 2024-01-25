import { client } from "@/sanity/lib/client";

async function getMission() {
  const query = `*[_type == "mission"]{
    description
  }[0]`;
  const fetchData = await client.fetch(query);
  return fetchData;
}

const Mission_vision = async () => {
  const mission = await getMission()
  
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-4">
      <h3 className="capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">Mission & vision</h3>
      <p className='px-4 font-Lato text-base tracking-tight text-justify'>{mission.description}</p>
    </section>
  )
}

export default Mission_vision