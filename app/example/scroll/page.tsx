import MemeView from "@/components/MemeView";
import { getTrendingData } from "@/lib/giphy";

const ExampleScrollPage = async () => {
  const data = await getTrendingData({ limit: 10, rating: "g" });

  return (
    <main className="main h-screen overflow-auto overflow-x-hidden snap-mandatory snap-y">
      {data.map((gif) => {
        return <MemeView key={gif.id} meme={gif} />;
      })}
    </main>
  );
};

export default ExampleScrollPage;
