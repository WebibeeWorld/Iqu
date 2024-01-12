"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
const FAQ = () => {
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-4">
      <h3 className="capitalize text-3xl  w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        FAQ
      </h3>
      <div className="w-full md:w-1/2 mx-auto">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="What types of therapy do you offer?
"
          >
            {
              "We provide a range of therapeutic services tailored to meet individual needs. Our experienced therapists offer psychotherapy, cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), and mindfulness-based approaches. We believe in a personalized approach to address various mental health concerns.*"
            }
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="How do I schedule an appointment"
          >
            {
              "Scheduling an appointment is easy! You can either call our office during business hours or use our online appointment request form. Our friendly staff will assist you in finding a convenient time for your initial consultation. We strive to accommodate your schedule and get you started on your journey towards mental well-being."
            }
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

// type FeatureItem = {
//   title: string;
//   icon: string;
//   description: string;
//   slug:string;
// }

export default FAQ;
