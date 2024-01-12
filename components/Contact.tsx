"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-4">
      <h3 className="capitalize text-3xl  w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        Contact Us
      </h3>
      <form className="space-y-5 w-full md:w-1/2 mx-auto">
        <Input
          variant="bordered"
          type="email"
          label="Email"
          labelPlacement={"outside"}
          placeholder="Enter your email"
        />
        <Textarea
          variant={"bordered"}
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        <Button
          color="primary"
          radius="lg"
          className="font-Lato font-semibold text-lg"
        >
          Enquire
        </Button>
      </form>
      <div>
      <div className="font-Montserrat text-lg font-bold flex items-center gap-3 p-3 justify-center">
          <span>
            <FaPhoneVolume className="w-7 h-7"/>
          </span>
          <h4>9876543212 OR 9876543212</h4>
        </div>
        </div>
      <div >
        <h4 className="font-Montserrat text-lg font-bold bg-blue-500 flex items-center gap-3 p-3 justify-center">
          <span>
            <FaMagnifyingGlassLocation className="w-7 h-7"/>
          </span>
          Visit our Clinic
        </h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31092.912694539165!2d80.19326766129646!3d13.060218784835405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5265a0f90304b7%3A0xb9c0a79cb54e00cf!2siqu%20clinc!3m2!1d13.074614599999999!2d80.2289943!5e0!3m2!1sen!2sin!4v1704303553294!5m2!1sen!2sin"
          width={"100%"}
          height={"600"}
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
