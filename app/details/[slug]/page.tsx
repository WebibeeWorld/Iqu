import GallerySlider from "@/components/GallerySlider";

export default function Page({ params }:{params:any}) {
    return <section>
      <div>Content of {params.slug}</div>
     <GallerySlider/>
      </section>
  }