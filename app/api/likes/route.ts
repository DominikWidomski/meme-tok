import prisma from "@/lib/prisma";

const USER_ID = process.env.USER_ID;
if (!USER_ID) {
  throw new Error("`USER_ID` env variable is missing.");
}

export async function GET() {
  const data = await prisma.likes.findMany({ where: { user_id: USER_ID } });

  return Response.json({ data });
}
