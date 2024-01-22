"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link as MyLink } from "react-scroll";

const NavLink = [
  { label: "Home", href: "/" },
  { label: "Types of Therapy", href: "/typesoftherapy" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-6 md:p-10 lg:p-[60px] space-y-4">
      <div className="space-y-5">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h4 className="font-Montserrat text-lg lg:text-2xl font-bold">IQU Clinic</h4>
          </Link>
          <div className="flex items-center gap-2 justify-center mt-1">
            <FaInstagram className="w-6 h-6 text-primary cursor-pointer hover:opacity-60" />
            <FaFacebookF className="w-6 h-6 text-primary cursor-pointer hover:opacity-60" />
          </div>
          </div>

          <div className="font-Lato font-semibold text-base flex justify-center items-center gap-5 capitalize ">
            {NavLink.map((link, idx) => (
              <MyLink
                to={link.href}
                spy={true}
                offset={-50}
                smooth={true}
                duration={500}
                className="capitalize cursor-pointer w-max font-Lato font-semibold md:text-base lg:text-xl hover:opacity-60"
                key={idx}
              >
                {link.label}
              </MyLink>
            ))}
          </div>
        </div>

        <div className="border bg-gray-20 mb-2" />
        <p className="regular-14 w-full text-center font-bold font-Montserrat">
          {`${currentYear} IQU | All rights reserved`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
