"use client";
// import { TherapyIcon } from "@/svg-components/therapyIcon";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Image from "next/image";

export const TOTCard = ({
  list,
  index,
}: {
  list: { title: string };
  index: number;
}) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.02 * index,
        staggerChildren: 0.5,
      },
    }),
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
    >
      <Card className="w-full md:w-[280px] rounded-md p-1.5">
        <CardBody className="justify-between ">
          <div className="flex items-center gap-4">
            <Image
              alt="logo"
              src="/coloricon.png"
              width={40}
              height={40}
            />
            <p className="text-base font-semibold leading-none text-default-600 line-clamp-2">
              {list.title}
            </p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
