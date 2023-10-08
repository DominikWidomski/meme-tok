"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const getLikeInfo = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/likes/${id}`, {
    cache: "no-cache",
  });
  return response.json();
};

export type LikeButtonProps = {
  gifID: string;
};

export default function LikeButton({ gifID }: LikeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [youLike, setYouLike] = useState(false);
  const [likeCount, setLikeCount] = useState<number | null>(null);

  useEffect(() => {
    const getInfo = async () => {
      const { count, youLike } = await getLikeInfo(gifID);
      console.log({ count, youLike });
      setYouLike(youLike);
      setLikeCount(count);
    };

    getInfo();
  }, []);

  async function handleClick() {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/likes/${gifID}`, {
        method: "POST",
      });
      const body = await response.json();
      console.log({ json: body });

      if (body.action === "created") {
        setYouLike(true);
        setLikeCount((count) => (count || 0) + 1);
      } else if (body.action === "deleted") {
        setYouLike(false);
        setLikeCount((count) => Math.max(0, (count || 0) - 1));
      }
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      title="Like"
      className="flex flex-row"
    >
      {likeCount ? <div className="pr-4">{likeCount}</div> : null}
      <div>{youLike ? "❤️" : "🤍"}</div>
    </Button>
  );
}
