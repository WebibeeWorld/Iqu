"use client";
import { Card, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { TeamType } from "@/sanity/lib/type";

const TeamCard = ({data}:{data : TeamType}) => {
  return (
    <Card shadow="sm" className="w-[260px] md:w-[320px] first:ms-5 bg-primary text-white">
      <CardHeader className="flex items-start gap-5">
        {/* <Image
          alt="nextui logo"
          height={120}
          width={60}
          radius="lg"
          src="/therapy2.jpg"
        /> */}
        <div className="relative w-[105px] h-[105px]">
          <Image fill alt="Team member" 
           src={urlForImage(data.doctorPic)} className="object-cover object-center rounded-md"  sizes="(min-width: 780px) calc(49.1vw - 43px), calc(100vw - 48px)"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAQUAAAAAAAAAAAAAAAAAEQIBAwQSE//EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/AJWXdlxjJU2aYAAFRb//2Q=="/>
        </div>
        <div className="flex flex-col font-Lato font-medium">
          <p className="font-Montserrat font-semibold text-lg md:text-2xl">{data.name}</p>
          <p className="text-base font-Lato font-normal">{data.designation}</p>
          <p className="text-base font-Lato font-normal">{data.role}</p>
          <p className="text-base font-Lato font-normal">{data.speciality}</p>
        </div>
      </CardHeader>
      <Divider className="bg-white"/>
      <CardFooter className="text-base">
        <p className="font-Lato">{data.shortNote}</p>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
