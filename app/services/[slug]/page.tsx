import Image from "next/image";

export default function page (){
  return (
    <section className="p-6 md:p-10 lg:p-[60px] space-y-3 md:space-y-4 w-full h-full">
      <h3 className="capitalize text-3xl md:text-6xl w-full mx-auto tracking-wide font-Montserrat font-bold text-center">
        Service Type
      </h3>
      <div className="relative w-full h-[340px] md:h-[540px] rounded-md overflow-hidden mx-auto">
        <Image
          fill
          alt="service image"
          src={"/therapy2.jpg"}
          className="object-cover object-center"
        />
      </div>
      <div className="space-y-3 md:space-y-4 font-Lato font-normal tracking-normal leading-relaxed md:text-justify">
        <p>
          Therapy is a transformative tool that can empower you to navigate
          life's challenges with resilience and authenticity.
          Therapy is a transformative tool that can empower you to navigate
          life's challenges with resilience and authenticity.
        </p>
        <p>
          Unlock Inner Strength: Therapy provides a safe space to tap into your
          resilience and learn effective coping strategies.
          Unlock Inner Strength: Therapy provides a safe space to tap into your
          resilience and learn effective coping strategies.
        </p>
        <p>
          Gain Clarity: Explore your thoughts and emotions, gaining fresh
          insights into your life, relationships, and personal patterns.
          Gain Clarity: Explore your thoughts and emotions, gaining fresh
          insights into your life, relationships, and personal patterns.
        </p>
        <p>
          Improve Relationships: Enhance communication skills, understand your
          needs, and build healthier, more fulfilling connections.
          Improve Relationships: Enhance communication skills, understand your
          needs, and build healthier, more fulfilling connections.
        </p>
        <p>
          Manage Stress: Learn practical tools to manage stress and anxiety,
          developing a personalized toolkit for resilience.
        </p>
        <p>
          Boost Self-Esteem: Break free from self-doubt, foster self-compassion,
          and build a positive self-image.
        </p>
      </div>
    </section>
  );
};
