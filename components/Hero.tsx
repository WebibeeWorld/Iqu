import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative h-screen" >
   <Image
        src={'/img-1.png'}
        alt="Home image"
        className="h-[100vh] object-cover object-center w-screen"
        fill
        // placeholder="blur"
        loading="lazy"
      />
      <form className="absolute left-2 top-[15%] md:left-40 md:mx-auto my-10 mx-3 p-4 md:p-8 space-y-4 bg-white max-w-sm md:max-w-lg rounded-md shadow-lg shadow-slate-500 md:opacity-[0.94]">
        {/* <h3 className="text-3xl md:text-4xl font-bold leading-normal text-[#800000]">
          N9 Power Services
        </h3> */}
   <div>
    <div>
        <h4 className="text-start text-xl font-bold  text-primary-50 leading-snug text-blue-70">
        <span className="text-pink-50 font-bold  text-2xl ">IQU Clinic</span>- You Deserve A Better Life
        </h4>
         {/* <div className="flex gap-1 mt-2">
            <SlLocationPin
              size={20}
              className="text-slate-500 hover:scale-110 hover:text-primary-50 cursor-pointer"
            />
            <h4 className="text-sm font-medium text-text-50 opacity-70 leading-normal hover:text-primary-50 cursor-pointer uppercase">
              Chennai
            </h4>
          </div> */}
        </div>
        </div>
        <p className="text-md md:text-xl">
        A Counseling And Therapy Center

        
        </p>
        <div className='flex gap-2'> 
        <Button 
          type="button"
          title="Directions"
          icon=""
          variant="btn_green"
        />
             <Button 
          type="button"
          title="Contact Us"
          icon=""
          variant="btn_green"
        />
   </div>
      </form>
    </section>
  )
}

export default Hero