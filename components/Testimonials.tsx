import { lists } from "@/constants/index";
import Image from "next/image";


export default function Testimonials() {
  return (
    <section className="py-6 md:py-10" id="Testimonial">
      <div className="py-10 mx-auto">
        <h2 className="bold-40 lg:bold-64  text-center">
          Customer Testimonials
        </h2>
        <hr className="w-56 mt-4 mx-auto p-[1px] bg-white" />
      </div>
      <div className="w-full h-full overflow-hidden flex gap-4 ">
        <div className="py-10 flex justify-around  gap-4 animate-horizontal_carousel">
          {lists.map((list, idx) => (
            <div
            className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-8 relative  overflow-hidden rounded-3xl
            w-[280px] md:w-[320px] h-[365px] 
            "
              key={idx}
            >
              <div className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                //   radius="sm"
                  src={list.img}
                  width={40}
                />
                <div className="flex flex-col  text-white">
                  <p className="text-xl md:text-2xl font-header"><strong>{list.title}</strong></p>
                  {/* <p className="text-sm text-default-500">{list.country}</p> */}
                </div>
              </div>
              {/* <Divider className="bg-primary" /> */}
              <div>
                <p className="leading-loose">{list.para}</p>
              </div>
              {/* <Divider/> */}
              {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
            </div>
          ))}
        </div>
        <div className="py-10 flex justify-around  gap-4 animate-horizontal_carousel">
          {lists.map((list, idx) => (
            <div
            className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-8 relative  overflow-hidden rounded-3xl
            w-[280px] md:w-[320px] h-[365px] 
            "
              key={idx}
            >
              <div className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                //   radius="sm"
                  src={list.img}
                  width={40}
                />
                <div className="flex flex-col text-white">
                  <p className="text-xl md:text-2xl font-header"><strong>{list.title}</strong></p>
                  {/* <p className="text-sm text-default-500">{list.country}</p> */}
                </div>
              </div>
              {/* <Divider className="bg-primary" /> */}
              <div>
                <p className="leading-loose">{list.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}