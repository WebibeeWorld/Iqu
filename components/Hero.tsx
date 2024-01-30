"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-3 md:space-y-4 text-center">
      <h2 className="capitalize font- text-4xl md:text-6xl w-full mx-auto tracking-wide font-Montserrat font-bold">
        You deserve a better Life
      </h2>
      <h3 className="capitalize font-urbanist text-lg md:text-xl w-full mx-auto font-Lato font-medium">
        A Counseling And Therapy Center
      </h3>
      <div className="flex justify-around items-center gap-3 border-2 p-2 w-full lg:w-1/2 mx-auto">
        <h4 className="hidden md:block text-sm md:text-lg font-Lato font-semibold">
          Excellent
        </h4>
        <div className="block md:flex items-center">
          <div className="flex items-center mb-1.5">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-secondary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-secondary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-secondary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-secondary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          </div>
          <p className="font-urbanist text-xs md:text-sm md:mt-1 px-1.5">
            based on{" "}
            <span className="underline">
              <Link href={"https://www.practo.com/Chennai/doctor/s-ananthi-psychologist/recommended"} target="_blank">52 reviews</Link>
            </span>
          </p>
        </div>
        <h4 className="block md:flex md:items-center md:gap-2 text-base md:text-xl font-urbanist font-bold">
          <div className="w-full flex justify-center items-center my-1 md:w-max md:my-0">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 ms-1 md:ms-1.5 text-secondary text-center"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          </div>
          <span className=" font-Lato font-semibold text-[#263077]">practo</span>
        </h4>
      </div>
      <Button
      as={Link}
        color="primary"
        size="lg"
        radius="full"
        className="px-16 py-4 font-Lato font-bold text-base md:text-lg text-white"
        target="_blank"
        href="https://www.practo.com/Chennai/doctor/s-ananthi-psychologist"
      >
        Book a Consultation{" "}
      </Button>
    </section>
    // <Element className="relative h-screen" name="hero">
    //   <Image
    //     src={"/therapy1.jpg"}
    //     alt="Home image"
    //     className="h-[100vh] object-cover object-center w-screen"
    //     fill
    //     // placeholder="blur"
    //     loading="lazy"
    //   />
    //   <form className="absolute left-0 top-[15%] md:left-40 md:mx-auto my-10 mx-3 p-4 md:p-8 space-y-4 bg-white max-w-sm md:max-w-lg rounded-md shadow-lg shadow-slate-500 md:opacity-[0.94]">
    //     {/* <h3 className="text-3xl md:text-4xl font-bold leading-normal text-[#800000]">
    //       N9 Power Services
    //     </h3> */}
    //     <div>
    //       <div>
    //         <h4 className="text-start text-xl font-bold  leading-snug text-blue-70">
    //           <span className="text-pink-50 font-bold  text-2xl ">
    //             IQU Clinic
    //           </span>
    //           - You Deserve A Better Life
    //         </h4>
    //         {/* <div className="flex gap-1 mt-2">
    //         <SlLocationPin
    //           size={20}
    //           className="text-slate-500 hover:scale-110 hover:text-primary-50 cursor-pointer"
    //         />
    //         <h4 className="text-sm font-medium text-text-50 opacity-70 leading-normal hover:text-primary-50 cursor-pointer uppercase">
    //           Chennai
    //         </h4>
    //       </div> */}
    //       </div>
    //     </div>
    //     <p className="text-md md:text-xl">A Counseling And Therapy Center</p>
    //     <div className="flex gap-2">
    //       <Link
    //         to={"direction"}
    //         spy={true}
    //         offset={-50}
    //         smooth={true}
    //         duration={500}
    //       >
    //         <Button
    //           type="button"
    //           title="Directions"
    //           icon=""
    //           variant="btn_yellow"
    //         />
    //         {/* <Button
    //       type="button"
    //       title="Contact Us"
    //       icon=""
    //       variant="btn_yellow"
    //     /> */}
    //       </Link>
    //     </div>
    //   </form>
    // </Element>
  );
};

export default Hero;
