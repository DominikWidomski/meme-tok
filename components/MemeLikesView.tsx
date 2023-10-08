import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const MemePreview = ({ id }: { id: string }) => {
  return (
    <div className="max-w-xs">
      <Image
        className="object-cover h-full"
        src={`https://media2.giphy.com/media/${id}/giphy.gif`}
        alt={"meme"}
        width={512}
        height={512}
      />
    </div>
  );
};

const MemeGrid = ({ gifIds }: { gifIds: string[] }) => {
  return (
    <div className="pt-28 grid grid-cols-3 gap-4 justify-between">
      {gifIds.map((id) => (
        <MemePreview key={id} id={id} />
      ))}
    </div>
  );
};

const NoMemes = () => (
  <div className="h-screen w-screen snap-center relative">
    <Image
      className="w-full h-screen object-cover absolute top-0 left-0 z-[-1]"
      src={"https://media2.giphy.com/media/UjfXF7DRoCu6KyLzRn/giphy.gif"}
      alt={"no worries if not"}
      width={512}
      height={512}
      priority
    />
    <div className="flex flex-col content-center text-center justify-center h-screen">
      <div className="p-14 text-black bg-white/60">
        <h2 className="text-3xl font-bold mb-8">No Likes!?</h2>
        <p className="mb-8">
          Boy you better get in there and like some crispy memes goddamn it!!!
        </p>
        <Link href={"/example/scroll"}>
          <Button>
            <span className="text-2xl pr-2">😭</span>
            <span>OK SHOW ME THE MEMES</span>
            <span className="text-2xl pl-2">😭</span>
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const MemeLikesView = ({ gifIds }: { gifIds: string[] }) => {
  if (gifIds.length === 0) {
    return <NoMemes />;
  }

  return <MemeGrid gifIds={gifIds} />;
};

export default MemeLikesView;
