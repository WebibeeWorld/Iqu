"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { Element } from "react-scroll";

export default function Contact() {
  const branches = [
    {
      name: "Kilpauk Branch",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3443650182753!2d80.23724087430463!3d13.077348312552546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526726dd4c0ab5%3A0xa483117f65ca66fd!2sCalve%20Chateau!5e0!3m2!1sen!2sin!4v1721299357331!5m2!1sen!2sin",
      landmark: "Nilgiris Backside near Ega theatre",
      place:"7B, 7th floor B block: "

    },
    {
      name: "Thirumulaivoyal Branch",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.299765180512!2d80.12660387430567!3d13.14348191108817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5262e84a6eedab%3A0x4ac8f347128955b4!2s7%2C%20Anna%20Main%20Rd%2C%20SVT%20Nagar%2C%20Venkateswara%20Nagar%2C%20Thirumullaivoyal%2C%20Chennai%2C%20Tamil%20Nadu%20600062!5e0!3m2!1sen!2sin!4v1721299418405!5m2!1sen!2sin",
      landmark: "MRK Store",
      place:""

    },
  ];
  return (
    <Element className="" name="enquire">
      <section className="flex flex-col  space-y-4 px-10 md:px-64 ">
        <h3 className="capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
          Contact Us
        </h3>
        <form className="space-y-5 w-full ">
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
          <div className="flex justify-center">
            <Button
              color="secondary"
              radius="full"
              className="font-Lato font-semibold text-lg text-black"
            >
              Enquire
            </Button>
          </div>
        </form>
        <div>
          <div className="font-Montserrat text-lg font-bold flex items-center gap-8 p-3 justify-center bg-success text-white tracking-widest rounded-md  my-10">
            <div className="font-Lato font-semibold space-y-4 block ">
              <h4 className="text-lg md:text-2xl">9876543212</h4>
              <div className="flex justify-center">
                <FaPhoneVolume className="w-7 h-7 animate-bounce" />
              </div>
              <h4 className="text-lg md:text-2xl">9876543212</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        {branches.map((b: any, i: any) => (
          <div key={i} className="w-full h-full p-6 md:p-10 lg:p-[60px]">
            <h4 className="relative flex-col font-Montserrat text-lg font-bold bg-primary text-white flex text-center items-center gap-3 p-3 justify-center">
              <span className="absolute left-4 top-2">
                <FaMagnifyingGlassLocation className="w-7 h-7 hidden md:block" />
              </span>
              {b.name}
              <h5>{b.place}{b.landmark}</h5>
            </h4>
            <iframe
              src={b.map}
              width={"100%"}
              height={"600"}
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ))}
      </section>
    </Element>
  );
}
