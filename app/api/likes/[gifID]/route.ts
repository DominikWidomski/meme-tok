import prisma from "@/lib/prisma";

const USER_ID = process.env.USER_ID;
if (!USER_ID) {
  throw new Error("`USER_ID` env variable is missing.");
}

export type Params = {
  params: {
    gifID: string;
  };
};

export async function POST(_: Request, { params }: Params) {
  if (!USER_ID) {
    throw new Error("`USER_ID` env variable is missing.");
  }

  const result = await prisma.likes.findFirst({
    where: { user_id: USER_ID, gif_id: params.gifID },
  });

  let data = null;
  let action = null;

  if (result === null) {
    // NOTE: Upsert just in case seems safer
    data = await prisma.likes.upsert({
      create: { user_id: USER_ID, gif_id: params.gifID },
      update: {},
      where: {
        user_id_gif_id: { user_id: USER_ID, gif_id: params.gifID },
      },
    });
    action = "created";
  } else {
    data = await prisma.likes.delete({
      where: { user_id_gif_id: { user_id: USER_ID, gif_id: params.gifID } },
    });
    action = "deleted";
  }

  console.log({ action, data });

  return Response.json({ action, data });
}

export async function GET(_: Request, { params }: Params) {
  const count = await prisma.likes.count({ where: { gif_id: params.gifID } });
  const youLike = (await prisma.likes.findFirst({
    where: { gif_id: params.gifID, user_id: USER_ID },
  }))
    ? true
    : false;

  return Response.json({ count, youLike });
}
