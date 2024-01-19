"use client"
import dynamic from "next/dynamic";
// import { FaCirclePlay } from "react-icons/fa6";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function KnowMore() {
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-4" id="Services">
      <h3 className="capitalize text-3xl  w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        Know More
      </h3>
      <div className="w-full flex justify-center items-center">
      {/* <FaCirclePlay className="absolute transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 text-white"/> */}
       <video muted controls autoPlay className="w-full h-full md:w-[640px] lg:w-[640px] md:h-[360px] rounded-lg">
         <source src="/sample.mp4" type="video/mp4"/>
         </video>
        {/* <ReactPlayer height={"100%"} width={"100%"} url={"/sample.mp4"} light={true} loop={true} controls={true} /> */}
      </div>
    </section>
  );
}
