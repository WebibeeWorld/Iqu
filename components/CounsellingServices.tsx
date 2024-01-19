"use client"
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Element } from "react-scroll";
import CounsellingCard from "./CounsellingCard";
import Marquee from "react-fast-marquee";

const CounsellingServices= () => {
  return (
    <Element className="h-full" name="testimonial" >
      <div className="relative h-full">
      <div className="relative h-[400px] md:h-[350px]">
        <Image src={"/img-1.png"} alt="image" fill className="object-cover object-center" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col space-y-4 px-4">
      <h3 className="capitalize text-3xl  w-full mx-auto tracking-wide font-Montserrat font-bold text-white text-center p-4">Counseling services</h3>
      <div className="my-5">
        <Marquee pauseOnHover speed={70} autoFill={true}>
        <div className="flex items-center gap-5 py-2">
          <CounsellingCard />
          <CounsellingCard />
          <CounsellingCard />
          <CounsellingCard />
          <CounsellingCard />
        </div>
          </Marquee>
          </div>
      </div>
      </div>
      <Card />
    </Element>
  )
}

export default CounsellingServices