"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const TeamHeadCard = () => {
  return (
    <Card shadow="sm" className="w-[250px]" >
      <CardBody className="overflow-visible p-0 relative w-full h-[240px]">
        <Image
        fill
          alt={"team members"}
          className="object-cover object-center"
          src={"/therapy2.jpg"}
        />
      </CardBody>
      <CardFooter className="text-small flex-col gap-2">
        <h4>Name</h4>
        <p className="text-default-500">Designation</p>
      </CardFooter>
    </Card>
  );
};

export default TeamHeadCard;
