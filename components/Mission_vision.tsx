"use client"
import { lists } from '@/constants'
import React from 'react'
import { Element } from 'react-scroll'
import CardSection from './Card'

const Mission_vision = () => {
  return (
    <Element className="p-6 md:p-10 lg:p-[60px] space-y-4" name="about">
      <h3 className="capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">Mission & vision</h3>
      <p className='px-4 font-Lato text-base tracking-tight text-justify'>At IQU, we believe that every individual possesses the strength to overcome life's challenges and find their path to happiness. Our team of dedicated and empathetic therapists and counselors are here to guide you through your unique story, offering a safe space for self-discovery and personal growth.</p>
    </Element>
  )
}

export default Mission_vision