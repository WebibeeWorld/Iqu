
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GallerySlider from "./GallerySlider";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

async function getTherapy() {
  const query = `*[_type == "therapy"]{
    content,
    gallery 
  }[0]`;
  const fetchData = await client.fetch(query);
  return fetchData;
}

const Therapy = async () => {
  const therapyData = await getTherapy();
  
  // therapyData.map((list:any)=> console.log(list)
  //   )
  return (
    <section
      className="overflow-hidden p-6 md:p-10 lg:p-[60px] space-y-4"
      id="BOT"
    >
      <h3 className=" capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        Benefits of Therapy
      </h3>
      <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5">
        {/* <div className='w-full md:w-1/2 mx-auto'> */}
        {/* {therapyData.map((list:any)=> console.log(list)
        )} */}
          <GallerySlider therapy={therapyData.gallery} />
        {/* </div> */}
        <div className="px-4 font-Lato text-base tracking-tight space-y-3 w-full prose prose-xl prose-blue prose-li:marker:text-[#9544c3]">
          <PortableText value={therapyData.content}/>
          {/* <p>
            Therapy is a transformative tool that can empower you to navigate
            life's challenges with resilience and authenticity.
          </p>
          <ul className="list-outside list-disc px-8">
            <li>
              Unlock Inner Strength: Therapy provides a safe space to tap into
              your resilience and learn effective coping strategies.
            </li>
            <li>
              Gain Clarity: Explore your thoughts and emotions, gaining fresh
              insights into your life, relationships, and personal patterns.
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  slug: string;
};

const FeatureItem = ({ title, icon, description, slug }: FeatureItem) => {
  return (
    <Link href={`/details/${slug}`}>
      <li className="flex w-full flex-1 flex-col items-start">
        <div className="rounded-full p-4 lg:p-7 bg-green-50">
          <Image src={icon} alt="map" width={28} height={28} />
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
          {description}
        </p>
      </li>
    </Link>
  );
};

export default Therapy;
