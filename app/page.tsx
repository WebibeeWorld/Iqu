import Hero from "@/components/Hero";
import Therapy from "@/components/Therapy";
import Mission_vision from "@/components/Mission_vision";
import KnowMore from "@/components/KnowMore";
import { TOT } from "@/components/TOT";
import { TeamServer } from "@/components/layout/TeamServer";
import { CounsellingServiceServer } from "@/components/layout/CounsellingServiceServer";
import { TestimonialServer } from "@/components/layout/TestimonialServer";

export default function Home() {
  return (
    <>
      <Hero />
      <CounsellingServiceServer />
      <TestimonialServer />
      <Therapy />
      <TOT />
      <TeamServer />
      <Mission_vision />
      <KnowMore />
    </>
  );
}
