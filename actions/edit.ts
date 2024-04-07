"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";


interface BlogProps {
  mainTitle: string;
  imgUrl: string;
  description: string;
  tagId: string;
  userId: string;
  subTitle1?: string;
  subTitle2?: string;
  subTitle3?: string;
  subTitle4?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
}

// 1. edit blog post
export const editBlog = async (id: string, data: BlogProps) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  await db.blogs.update({
    where: {
      id: id,
    },
    data,
  });
};
