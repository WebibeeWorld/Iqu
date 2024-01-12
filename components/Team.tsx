"use client";
import { team } from "@/constants/index";
import { Card, CardFooter, Image, Button, Tooltip } from "@nextui-org/react";
import CounsellingCard from "./CounsellingCard";
import TeamCard from "./TeamCard";
import Marquee from "react-fast-marquee";
// import { MdFavoriteBorder } from "react-icons/md";

export default function Team() {
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-4" id="Testimonial">
      <h3 className="capitalize text-3xl  w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        Meet The Team
      </h3>
      <div className="space-y-3">
        <h4 className="capitalize text-xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center">
          About
        </h4>
        <p className="font-Lato text-base tracking-tight text-justify">
          At IQU, we believe that every individual possesses the strength to
          overcome life's challenges and find their path to happiness. Our team
          of dedicated and empathetic therapists and counselors are here to
          guide you through your unique story, offering a safe space for
          self-discovery and personal growth.
        </p>
        <Marquee pauseOnHover speed={70} autoFill={true}>
          <div className="flex items-center gap-5 w-full h-full py-5">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </Marquee>
      </div>
    </section>
  );
}
