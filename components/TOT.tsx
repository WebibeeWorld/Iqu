"use client";
import { Button } from "@nextui-org/react";
import { TOTCard } from "./TOTCard";
import { useRouter } from "next/navigation";
// import {motion} from "framer-motion"
import { Element } from "react-scroll";
import { useEffect, useState } from "react";

export const TOT = ({ desc, types }: { desc: string; types: string[] }) => {
  const router = useRouter();
  const [width, setWidth] = useState(1000);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Element
      className="p-6 md:p-10 lg:p-[60px] space-y-3 md:space-y-4 w-full h-full flex flex-col justify-center items-center"
      name="therapy"
    >
      <h3 className="capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center">
        Types of Therapy
      </h3>
      <p className="font-Lato font-normal tracking-normal leading-relaxed w-full text-center">
        {desc}
      </p>
      <div className="w-full h-full md:w-[80%] mx-auto shadow-2xl bg-primary p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-lg gap-5 place-items-center">
        {types
          .slice(0, width >= 600 ? 9 : 5)
          .map((list: string, idx: number) => (
            <TOTCard list={list} key={idx} index={idx} />
          ))}
      </div>
      <Button
        color="success"
        size="lg"
        radius="full"
        className="mx-auto font-Montserrat font-semibold text-xl text-white"
        onClick={() => router.push("/typesoftherapy")}
      >
        View More
      </Button>
    </Element>
  );
};
