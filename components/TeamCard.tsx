"use client";
import { Card, CardFooter, CardHeader, Divider,Image  } from "@nextui-org/react";

const TeamCard = () => {
  return (
    <Card shadow="sm" className="min-w-[250px] first:ms-5 border border-green-600">
      <CardHeader className="flex items-start gap-5">
        <Image
          alt="nextui logo"
          height={120}
          width={120}
          radius="lg"
          src="/therapy2.jpg"
        />
        <div className="flex flex-col font-Lato font-medium">
          <p className="text-lg">Name</p>
          <p className="text-base">Designation</p>
          <p className="text-base">Role</p>
          <p className="text-base text-default-500">@speciality</p>
        </div>
      </CardHeader>
      <Divider className="bg-green-600"/>
      {/* <CardBody className="overflow-visible p-0 relative w-full h-[240px]">
        <Image
        fill
          alt={"team members"}
          className="object-cover object-center"
          src={"/therapy2.jpg"}
        />
      </CardBody> */}
      <CardFooter className="text-base">
        <p className="font-Lato">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
