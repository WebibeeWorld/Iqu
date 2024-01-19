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
    <Card className="max-w-[320px] max-h-fit md:!max-w-md p-3 first:ms-5"> 
      <CardHeader>
        <h4 className="text-xl md:text-3xl font-semibold leading-none text-default-600 font-Montserrat">
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
        <Button radius="full"color="primary" className="capitalize font-lato text-base" onClick={()=>router.push("/services/1")}>Know More</Button>
      </CardFooter>
    </Card>
  );
};

export default CounsellingCard;
