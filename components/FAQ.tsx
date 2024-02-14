"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Element } from "react-scroll";

type faqType = {
  question: string;
  answer: string;
};

const FAQ = ({ faq }: { faq: faqType[] }) => {
  return (
    <Element className="p-6 md:p-10 lg:p-[60px] space-y-4" name="FAQ">
      <h3 className="capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        FAQ
      </h3>
      <div className="w-full mx-auto md:px-32">
        <Accordion variant="splitted">
          {faq.map((list: faqType, idx: number) => (
            <AccordionItem
              key={idx}
              aria-label={list.question}
              title={list.question}
            >
              {list.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Element>
  );
};

export default FAQ;
