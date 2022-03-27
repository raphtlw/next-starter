// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const hello = await prisma.hello.findFirst();
  if (!hello) {
    res.status(404).send("Failed to find `hello` record in Database");
  } else {
    res.status(200).json(hello);
  }
}
