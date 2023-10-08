import LikeButton from "@/app/likeButton";
import { IGif } from "@giphy/js-types";
import Image from "next/image";

const MemeView = ({ meme }: { meme: IGif }) => {
  let { id, images, title } = meme;

  id = String(id);

  return (
    <section
      id={id}
      key={id}
      className="h-screen w-screen snap-center relative"
    >
      <Image
        className="w-full h-screen object-cover absolute top-0 left-0 z-[-1]"
        src={images.original.webp}
        alt={title}
        width={512}
        height={512}
        priority
      />
      <div className="absolute bottom-0 w-screen p-10 flex justify-between items-center gap-4 bg-black/50">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p>{id}</p>
        </div>
        <LikeButton gifID={id} />
      </div>
    </section>
  );
};

export default MemeView;
