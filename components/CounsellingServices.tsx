"use client"
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { Element } from "react-scroll";
import CounsellingCard from "./CounsellingCard";
import Marquee from "react-fast-marquee";
import { ServiceType } from "@/sanity/lib/type";

const CounsellingServices= ({services} : {services : ServiceType[]}) => {
  return (
    <Element className="h-full" name="services" >
      <div className="relative h-full">
      <div className="relative h-[400px] md:h-[350px]">
        <Image src={"/therapy2.jpg"} alt="image" fill className="object-cover object-center"  sizes="(min-width: 780px) calc(49.1vw - 43px), calc(100vw - 48px)"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAQUAAAAAAAAAAAAAAAAAEQIBAwQSE//EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/AJWXdlxjJU2aYAAFRb//2Q=="/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col space-y-4 px-4">
      <h3 className="capitalize text-3xl md:text-5xl  w-full mx-auto tracking-wide font-Montserrat font-bold text-white text-center p-4">Counseling services</h3>
      <div className="my-5">
        <Marquee pauseOnHover speed={70} autoFill={true}>
        <div className="flex items-center gap-5 py-2">
          {services.map((service :ServiceType ,idx : number)=>(
          <CounsellingCard service={service} key={idx}/>
          ))}
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