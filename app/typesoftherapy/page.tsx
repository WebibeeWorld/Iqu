"use client";
import { TOTCard } from "@/components/TOTCard";
import { thearpies } from "@/constants";
import { Button, Pagination } from "@nextui-org/react";
import React from "react";

export default function page() {
  const [page, setPage] = React.useState(1);
  const firstPage = page * 10 - 10;
  const lastPage = page * 10;
  const classNames = {
    // wrapper: "gap-3 overflow-visible h-14 rounded bg-primary p-3 rounded-md",
    // item: "w-8 h-8 rounded-md bg-transparent border border-black text-lg",
    // next: "bg-success font-semibold data-hover:bg-opacity-50",
    // prev: "bg-success font-semibold  data-hover:bg-opacity-50",
    cursor: "shadow-lg text-white font-semibold ",
  };
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-3 md:space-y-4 w-full h-full relative">
      <h3 className="capitalize text-3xl md:text-6xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center">
        Types Of Therapy
      </h3>
      <p className="font-Lato font-normal tracking-normal leading-relaxed w-full text-center">
        Therapy is a transformative tool that can empower you to navigate life's
        challenges with resilience and authenticity.
      </p>
      <Button
        color="success"
        size="lg"
        radius="full"
        className="mx-auto font-Montserrat font-semibold text-xl capitalize flex justify-center items-center text-white"
      >
        download brochure
      </Button>
      {/* max-h-[340px] md:max-h-[540px] */}
      <div className="sticky top-5 w-full h-full md:w-[80%] mx-auto shadow-2xl bg-primary p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-lg gap-5 place-items-center">
        {thearpies.slice(firstPage, lastPage).map((types, idx) => (
          <TOTCard type={types} key={idx} index={idx} />
        ))}
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 py-2">
        <Button
          variant="faded"
          onPress={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="hidden sm:block bg-primary text-white p-2"
        >
          Prev
        </Button>
        <Pagination
          size="lg"
          color="primary"
          variant="faded"
          total={thearpies.length / 10}
          initialPage={1}
          page={page}
          onChange={setPage}
          classNames={classNames}
        />
        <Button
          variant="faded"
          onPress={() => setPage((prev) => (prev < thearpies.length /10 ? prev + 1 : prev))}
          className="hidden sm:block bg-primary text-white p-2"
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
          onPress={() => setPage((prev) => (prev < thearpies.length /10 ? prev + 1 : prev))}
          className="bg-primary text-white p-2"
        >
          Next
        </Button>
      </div>
      </div>
    </section>
  );
}
