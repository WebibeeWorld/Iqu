"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const CounsellingCard = () => {
  const router = useRouter()
  return (
    <Card className="max-w-[300px] max-h-fit md:!max-w-md p-3 first:ms-5 bg-primary text-white"> 
      <CardHeader>
        <h4 className="text-lg md:text-xl font-semibold leading-none font-Montserrat">
          Family Counselling
        </h4>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small h-auto">
        <ul className="font-Lato text-base list-disc list-outside">
            <li>4 Individual Counseling Sessions (45 minutes each)</li>
            <li>Email Support between Sessions</li>
            <li>Access to Self-Help Resources</li>
        </ul>
      </CardBody>
      <CardFooter className="gap-3">
        <Button radius="full" color="success" className="capitalize font-lato text-base text-white font-semibold" onClick={()=>router.push("/services/1")}>Know More</Button>
      </CardFooter>
    </Card>
  );
};

export default CounsellingCard;
