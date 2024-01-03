import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/About";
import TherapyTypes from "@/components/TherapyTypes";
import Diagnosis from "@/components/Diagnosis";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Package from "@/components/Package";
import GallerySlider from "@/components/GallerySlider";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <AboutUs />
      <TherapyTypes />
      <Gallery />
      <GallerySlider/>
      <Team />
      <Package />
      <Diagnosis />
      <Contact />
    </>
  );
}
