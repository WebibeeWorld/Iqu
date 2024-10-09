"use client";
import { Button, Pagination } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { TOTCard } from "./TOTCard";

const SlugTOT = ({desc,types,pdfFile}:{desc: string,types:string[],pdfFile:string}) => {
    
    const [page, setPage] = React.useState(1);
    const firstPage = page * 9 - 9;
    const lastPage = page * 9;
    const classNames = {
      cursor: "shadow-lg text-white font-semibold ",
    };
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-3 md:space-y-4 w-full h-full relative">
      <h3 className="capitalize text-3xl md:text-6xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center">
        Types of Counselling
      </h3>
      <p className="font-Lato font-normal tracking-normal leading-relaxed w-full text-center !mb-5">
        {desc}
      </p>
      <Link href={pdfFile} download>
      <Button
        color="success"
        size="lg"
        radius="full"
        className="mx-auto font-Montserrat font-semibold text-xl capitalize flex justify-center items-center text-white"
      >
        download brochure
      </Button>
      </Link>
      {/* max-h-[340px] md:max-h-[540px] */}
      <div className="sticky top-5 w-full h-full md:w-[80%] mx-auto shadow-2xl bg-primary p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-lg gap-5 place-items-center">
        {types.slice(firstPage, lastPage).map((list, idx) => (
          <TOTCard list={list} key={idx} index={idx} />
        ))}
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 py-2">
        <Button
          variant="faded"
          onPress={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="hidden sm:block bg-success text-white p-2"
        >
          Prev
        </Button>
        <Pagination
          size="lg"
          color="success"
          variant="faded"
          total={Math.round(types.length / 9)}
          initialPage={1}
          page={page}
          onChange={setPage}
          classNames={classNames}
        />
        <Button
          variant="faded"
          onPress={() => setPage((prev) => (prev < types.length / 9 ? prev + 1 : prev))}
          className="hidden sm:block bg-success text-white p-2"
        >
          Next
        </Button>
      <div className="flex justify-center items-center gap-5 sm:hidden">
      <Button
          variant="faded"
          onPress={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="bg-primary text-white p-2"
        >
          Prev
        </Button>
      <Button
          variant="faded"
          onPress={() => setPage((prev) => (prev < types.length / 9 ? prev + 1 : prev))}
          className="bg-primary text-white p-2"
        >
          Next
        </Button>
      </div>
      </div>
    </section>
  )
}

export default SlugTOT