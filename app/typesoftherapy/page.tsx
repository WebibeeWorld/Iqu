"use client"
import { TOTCard } from '@/components/TOTCard'
import { thearpies } from '@/constants'
import { Button } from '@nextui-org/react'
import React from 'react'

export default function page (){
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-3 md:space-y-4 w-full h-full relative">
      <h3 className="capitalize text-3xl md:text-6xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center">
      Types Of Therapy
      </h3>
      <p className="font-Lato font-normal tracking-normal leading-relaxed w-full text-center">
        Therapy is a transformative tool that can empower you to navigate life's
        challenges with resilience and authenticity.
      </p>
      <Button color="success" size="lg" radius="md" className="mx-auto font-Montserrat font-semibold text-xl capitalize flex justify-center items-center">download brochure</Button>
      {/* max-h-[340px] md:max-h-[540px] */}
      <div className="sticky top-5 w-full h-full md:w-[80%] mx-auto shadow-2xl bg-green-500 bg-opacity-60 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-lg gap-5 place-items-center">
      {thearpies.map((types,idx) =>(
          <TOTCard type={types} key={idx} index={idx}/>
        ))}
      </div>
    </section>
  )
}
