import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import CounsellingServices from "@/components/CounsellingServices";
import Therapy from "@/components/Therapy";
import Mission_vision from "@/components/Mission_vision";
import KnowMore from "@/components/KnowMore";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <CounsellingServices />
      <Testimonials />
      <Therapy />
      <Team />
      <Mission_vision />
      <KnowMore />
      <FAQ />
      <Contact />
    </>
  );
}
