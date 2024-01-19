"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
const FsLightbox = dynamic(() => import("fslightbox-react"), { ssr: false });
// import FsLightbox from "fslightbox-react";

export default function GallerySlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: slideIndex + 1,
  });
  function openLightboxOnSlide(number: any) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number + 1,
    });
  }
  return (
    <>
    <Carousel
      showThumbs={false}
      showStatus={false}
      onChange={(index) => setSlideIndex(index) }
      onClickItem={(index)=>(
        openLightboxOnSlide(index)
      )}
    >
      <div className="relative h-[320px] w-full">
        <Image
          src="/therapy1.jpg"
          alt="camp-2"
          fill
          className="camp-quote object-cover object-center"
        />
      </div>
      <div className="relative h-[320px] w-full">
        <Image
          src="/therapy2.jpg"
          alt="camp-2"
          fill
          className="camp-quote object-cover object-center"
        />
      </div>
      {/* <div className="relative h-[320px] w-full aspect-square">
        <Image src="/therapy1.jpg" alt="camp-2" fill className="camp-quote object-cover object-center" />
      </div> */}
    </Carousel>
    <FsLightbox
          exitFullscreenOnClose={true}
          toggler={lightboxController.toggler}
          sources={[
            "/therapy1.jpg",
            "/therapy2.jpg"
          ]}
          type="image"
          slide={lightboxController.slide}
        />
    </>
  );
}
