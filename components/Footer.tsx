"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-6 md:p-10 lg:p-[60px] space-y-4">
      <div className="">
        <div className="flex items-center justify-between gap-5">
          <div className="space-y-2  mb-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
              <h4 className="font-Montserrat text-lg font-bold">IQU Clinic</h4>
            </Link>
            <div className="flex items-center gap-2 justify-center">
              <FaInstagramSquare className="w-7 h-7 text-blue-900" />
              <FaFacebook className="w-7 h-7 text-blue-900" />
            </div>
          </div>
          <div className="font-Lato font-semibold text-base block capitalize">
            <h5>about</h5>
            <h5>book consultation</h5>
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
