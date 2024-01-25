"use client";
import { urlForImage } from "@/sanity/lib/image";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
const FsLightbox = dynamic(() => import("fslightbox-react"), { ssr: false });
// import FsLightbox from "fslightbox-react";

export default function GallerySlider({ therapy }: { therapy: any }) {
  const imgSrc = therapy.map((list: any) => {
    return urlForImage(list)
  });
  
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
        onChange={(index) => setSlideIndex(index)}
        onClickItem={(index) => openLightboxOnSlide(index)}
      >
        {therapy.map((list: any, idx: number) => (
          <div className="relative h-[320px] w-full cursor-pointer" key={idx}>
            <Image
              src={urlForImage(list)}
              alt="camp-2"
              fill
              sizes="(min-width: 780px) calc(49.1vw - 43px), calc(100vw - 48px)"
              className="camp-quote object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAQUAAAAAAAAAAAAAAAAAEQIBAwQSE//EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/AJWXdlxjJU2aYAAFRb//2Q=="
            />
          </div>
        ))}
        {/* <div className="relative h-[320px] w-full">
          <Image
            src="/therapy2.jpg"
            alt="camp-2"
            fill
            className="camp-quote object-cover object-center"
            sizes="(min-width: 780px) calc(49.1vw - 43px), calc(100vw - 48px)"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAQUAAAAAAAAAAAAAAAAAEQIBAwQSE//EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/AJWXdlxjJU2aYAAFRb//2Q=="
          />
        </div> */}
      </Carousel>
      <FsLightbox
        exitFullscreenOnClose={true}
        toggler={lightboxController.toggler}
        sources={imgSrc}
        type="image"
        slide={lightboxController.slide}
      />
    </>
  );
}
