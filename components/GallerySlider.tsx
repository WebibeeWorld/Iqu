"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function GallerySlider() {
  return (
    <section>
    <div className="text-5xl mb-4 font-bold flex w-full justify-center"> Gallery </div>
    <Carousel>
      <div className="h-screen aspect-square">
        <Image src="/therapy1.jpg" alt="camp-2" fill className="camp-quote" />
        <p className="legend">Legend 1</p>
      </div>
      <div className="h-screen aspect-square">
        <Image src="/therapy2.jpg" alt="camp-2" fill className="camp-quote" />
        <p className="legend">Legend 2</p>
      </div>
      <div className="h-screen aspect-square">
        <Image src="/therapy1.jpg" alt="camp-2" fill className="camp-quote" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    </section>
  );
}
