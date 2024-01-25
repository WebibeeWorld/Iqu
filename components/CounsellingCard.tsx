"use client";
import { ServiceType } from "@/sanity/lib/type";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const CounsellingCard = ({service} : {service : ServiceType}) => {
  const router = useRouter()
  return (
    <Card className="max-w-[300px] max-h-fit md:!max-w-md p-3 first:ms-5 bg-primary text-white"> 
      <CardHeader>
        <h4 className="text-lg md:text-xl font-semibold leading-none font-Montserrat">
          {service.title}
        </h4>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small h-auto">
        {/* <ul className="font-Lato text-base list-disc list-outside">
            <li>4 Individual Counseling Sessions (45 minutes each)</li>
            <li>Email Support between Sessions</li>
            <li>Access to Self-Help Resources</li>
        </ul> */}
        <p className="font-Lato text-base">
           {service.smallDescription}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <Button radius="full" color="success" className="capitalize font-lato text-base text-white font-semibold" onClick={()=>router.push(`/services/${service.currentSlug}`)}>Know More</Button>
      </CardFooter>
    </Card>
  );
};

export default CounsellingCard;
