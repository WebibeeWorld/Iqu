"use client";
import { about, services } from "@/constants/index";
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

export default function Contact() {
  return (
    <section className="py-16 bg-gradient px-5" id="Contact us">
      <div className="w-full md:w-4/5 lg:w-[40%] bg-white mx-auto rounded-lg ">
        <div className="bg-black-gradient border-b-1 border-primary rounded-t-lg py-3">
          <h2 className="font-header text-5xl md:text-7xl text-center text-black">
            Contact Us
          </h2>
    
        </div>
        <form
          action="https://public.herotofu.com/v1/f14b0b40-a9a1-11ee-8fa9-872d80d8eac1"
          method="post" accept-charset="UTF-8"
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
          <Input
            isRequired
            type="text"
            label="Company Name"
            className="max-w-lg"
            color="primary"
            variant={"bordered"}
          />
        </form>
      </div>
    </section>
  );
}