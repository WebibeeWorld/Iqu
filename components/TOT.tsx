"use client"
import { Button } from "@nextui-org/react";
import { TOTCard } from "./TOTCard";
import { useRouter } from "next/navigation";
// import {motion} from "framer-motion"
import { thearpies } from "@/constants";

export const TOT = () => {
  const router = useRouter()
  
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-3 md:space-y-4 w-full h-full flex flex-col justify-center items-center">
      <h3 className="capitalize text-xl md:text-4xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center">
        Types of Therapy
      </h3>
      <p className="font-Lato font-normal tracking-normal leading-relaxed w-full text-center">
        Therapy is a transformative tool that can empower you to navigate life's
        challenges with resilience and authenticity.
      </p>
      <div className="w-full h-full md:w-[80%] mx-auto shadow-2xl bg-green-500 bg-opacity-60 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-lg gap-5 place-items-center" >
        {thearpies.slice(0,9).map((types,idx) =>(
          <TOTCard type={types} key={idx} index={idx}/>
        ))}
      </div>
      <Button color="success" size="lg" radius="md" className="mx-auto font-Montserrat font-semibold text-xl " onClick={() => router.push("/typesoftherapy")}>View More</Button>
    </section>
  );
};
