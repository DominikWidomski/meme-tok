import { getTrendingData } from "@/lib/giphy";
import Image from "next/image";
import LikeButton from "./likeButton";

export default async function Home() {
  const data = await getTrendingData({ limit: 10, rating: "g" });
  return (
    <main className="main bg-zinc-800/30 h-screen overflow-auto snap-mandatory snap-y">
      {data.map((gif) => {
        const { id, images, title } = gif;
        console.log(gif);
        const gif_id = String(id);
        return (
          <section
            id={gif_id}
            key={gif_id}
            className="h-screen snap-center relative p-5"
          >
            <Image
              className="w-full h-screen object-cover absolute top-0 left-0 z-[-1]"
              src={images.original.webp}
              alt={title}
              width={512}
              height={512}
              priority
            />
            <LikeButton gifID={gif_id} />
          </section>
        );
      })}
    </main>
  );
}
