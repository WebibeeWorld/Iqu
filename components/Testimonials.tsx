"use client"
import { lists } from "@/constants/index";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Element } from "react-scroll";
import CardSection from "./Card";

export default function Testimonials() {
  return (
    <Element className="py-6 md:py-10" name="testimonial" >
      {/* <div className="py-10 mx-auto">
        <h2 className="bold-40 lg:bold-64  text-center">
          Customer Testimonials
        </h2>
        <hr className="w-56 mt-4 mx-auto p-[1px] bg-white" />
      </div> */}
      <div className="relative">
      <div className="relative h-[525px]">
        <Image src={"/img-1.png"} alt="image" fill className="object-cover object-center" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex gap-4 ">
        <div className="py-10 flex justify-around  gap-4 animate-horizontal_carousel">
          {lists.map((list, idx) => (
            <CardSection list={list} key={idx}/>
          ))}
        </div>
      </div>
      </div>
      <Card />
    </Element>
  );
}