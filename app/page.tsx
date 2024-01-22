import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import CounsellingServices from "@/components/CounsellingServices";
import Therapy from "@/components/Therapy";
import Mission_vision from "@/components/Mission_vision";
import KnowMore from "@/components/KnowMore";
import { TOT } from "@/components/TOT";

export default function Home() {
  return (
    <>
      <Hero />
      <CounsellingServices />
      <Testimonials />
      <Therapy />
      <TOT />
      <Team />
      <Mission_vision />
      <KnowMore />
    </>
  );
}
