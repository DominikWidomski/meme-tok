import MemeLikesView from "@/components/MemeLikesView";
import type { likes } from "@prisma/client";

const getLikes = async (): Promise<{ data: likes[] }> => {
  const response = await fetch(`http://localhost:3000/api/likes`, {
    cache: "no-cache",
  });
  const json = await response.json();
  return json;
};

const ExampleLikesPage = async () => {
  const { data } = await getLikes();

  const ids = data.map(({ gif_id }) => gif_id);

  return <MemeLikesView gifIds={ids} />;
};

export default ExampleLikesPage;
