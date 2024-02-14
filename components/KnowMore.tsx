"use client";

import Image from "next/image";
// @ts-ignore
import HoverVideoPlayer from "react-hover-video-player";
import { FaPlayCircle } from "react-icons/fa";
export default function KnowMore({ videoFile }: { videoFile: string }) {
  return (
    <section
      className="p-6 md:p-10 lg:p-[60px] space-y-4 relative"
      id="Services"
    >
      <h3 className="capitalize text-3xl md:text-5xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center p-4">
        Know More
      </h3>
      <Image
        width={200}
        height={200}
        alt="gif image"
        src={"/be-kind.gif"}
        className="absolute top-[200px] xl:left-32 lg:left-0 object-contain -rotate-12 hidden lg:block"
      />
      <Image
        width={200}
        height={200}
        alt="gif image"
        src={"/be-kind.gif"}
        className="absolute top-[200px] xl:right-32 lg:right-1.5 object-contain rotate-12 hidden lg:block"
      />
      <div className="w-full flex justify-center items-center h-auto">
        {/* <video muted controls autoPlay className="w-full h-full md:w-[640px] lg:w-[640px] md:h-[360px] rounded-lg">
         <source src={videoFile} type="video/mp4"/>
         </video> */}
        <HoverVideoPlayer
          loop
          videoSrc={videoFile}
          pausedOverlay={
            <div className="w-full h-full flex justify-center items-center">
              <FaPlayCircle className="text-white h-8 w-8 md:h-12 md:w-12 hidden md:block" />
            </div>
          }
          width="100%"
          height="100%"
          muted={false}
          className="cursor-pointer w-full h-full md:!w-[640px] lg:!w-[640px] md:!h-[360px] rounded-lg"
          controls
          // Disable both the download and fullscreen buttons
          controlsList="nodownload nofullscreen"
        />
      </div>
    </section>
  );
}
