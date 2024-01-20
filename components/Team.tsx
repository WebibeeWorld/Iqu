"use client";

import TeamCard from "./TeamCard";
import Marquee from "react-fast-marquee";
import TeamHeadCard from "./TeamHeadCard";


export default function Team() {
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-4" id="Testimonial">
      <h3 className="capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        Meet The Team
      </h3>
      <div className="space-y-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <TeamHeadCard/>
        <p className="font-Lato text-base tracking-tight text-justify">
          At IQU, we believe that every individual possesses the strength to
          overcome life's challenges and find their path to happiness. Our team
          of dedicated and empathetic therapists and counselors are here to
          guide you through your unique story, offering a safe space for
          self-discovery and personal growth.
        </p>
        </div>
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
