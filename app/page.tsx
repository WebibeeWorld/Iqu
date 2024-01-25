import Hero from "@/components/Hero";
import Therapy from "@/components/Therapy";
import Mission_vision from "@/components/Mission_vision";
import KnowMore from "@/components/KnowMore";
import { TeamServer } from "@/components/layout/TeamServer";
import { CounsellingServiceServer } from "@/components/layout/CounsellingServiceServer";
import { TestimonialServer } from "@/components/layout/TestimonialServer";
import { TypesOfTherapyServer } from "@/components/layout/TypesOfTherapyServer";

export default function Home() {
  return (
    <>
      <Hero />
      <CounsellingServiceServer />
      <TestimonialServer />
      <Therapy />
      <TypesOfTherapyServer />
      <TeamServer />
      <Mission_vision />
      <KnowMore />
    </>
  );
}
