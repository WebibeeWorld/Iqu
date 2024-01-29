import { client } from "@/sanity/lib/client";
import KnowMore from "../KnowMore";

async function getVideo() {
  const query = `*[_type == "video"]{
    "videoUrl": video.asset->url
  }[0]`;
  const fetchData = await client.fetch(query);
 
  return fetchData;
}

export const KnowMoreServer = async () => {
    const videoUrl = await getVideo()
  return (
    <KnowMore videoFile={videoUrl.videoUrl}/>
  )
}
