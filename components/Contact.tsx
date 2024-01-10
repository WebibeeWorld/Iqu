"use client";
import { about, services } from "@/constants/index";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import Link from "next/link";
import { Element } from "react-scroll";

export default function Contact() {
  return (
    <>    <Element  name="contact_us">
    <section className="py-16 bg-gradient px-5" id="Contact us">
      <div className="w-full md:w-4/5 lg:w-[40%] bg-white mx-auto rounded-lg ">
        <div className="bg-black-gradient border-b-1 border-primary rounded-t-lg py-3">
          <h2 className="font-header text-5xl md:text-7xl text-center text-black">
            Contact Us
          </h2>
        </div>
        <form
          action="https://public.herotofu.com/v1/f14b0b40-a9a1-11ee-8fa9-872d80d8eac1"
          method="post"
          acceptCharset="UTF-8"
          className="space-y-5 bg-zinc-100 py-10 px-3 rounded-lg"
        >
          <Input
            isRequired
            type="email"
            label="Email"
            name="email"
            className="max-w-lg"
            color="primary"
            variant={"bordered"}
          />
          <Input
            isRequired
            type="text"
            label="Number"
            name="number"
            className="max-w-lg"
            color="primary"
            variant={"bordered"}
          />
          <Button type="submit">Enquire</Button>
        </form>
      </div>

    </section>
    </Element>
    <Element  name="direction">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31092.912694539165!2d80.19326766129646!3d13.060218784835405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5265a0f90304b7%3A0xb9c0a79cb54e00cf!2siqu%20clinc!3m2!1d13.074614599999999!2d80.2289943!5e0!3m2!1sen!2sin!4v1704303553294!5m2!1sen!2sin"
        width={"100%"}
        height={"600"}
        style={{border:0}}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
          </Element>
    </>

  );
}
