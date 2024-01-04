import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  const res = await request.json();
  const { title, content } = res;

  console.log({ res });

  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { create: { name: "John Doe" } },
    },
  });

  return NextResponse.json({ data: res });
}
