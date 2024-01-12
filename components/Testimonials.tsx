"use client"
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Element } from "react-scroll";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";


export default function Testimonials() {
  return (
    <Element className="py-6 md:py-10 h-full flex flex-col gap-4" name="testimonial" >
     <h3 className=" capitalize text-3xl w-full mx-auto tracking-wide font-Montserrat font-bold text-black text-center py-7 px-4">Testimonials</h3>
     <Marquee pauseOnHover speed={70} autoFill={true}>
     <div className="flex items-center gap-5 w-full h-full py-5">
     <TestimonialCard />
     <TestimonialCard />
     <TestimonialCard />
     <TestimonialCard />
     <TestimonialCard />
     </div>
     </Marquee>
      <Card />
    </Element>
  );
}