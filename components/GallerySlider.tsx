"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function GallerySlider() {
  return (
    <Carousel showThumbs={false} showStatus={false}  >
      <div className="relative h-[320px] w-full">
        <Image src="/therapy1.jpg" alt="camp-2" fill className="camp-quote object-cover object-center" />
      </div>
      <div className="relative h-[320px] w-full">
        <Image src="/therapy2.jpg" alt="camp-2" fill className="camp-quote object-cover object-center" />
      </div>
      {/* <div className="relative h-[320px] w-full aspect-square">
        <Image src="/therapy1.jpg" alt="camp-2" fill className="camp-quote object-cover object-center" />
      </div> */}
    </Carousel>
  );
}
