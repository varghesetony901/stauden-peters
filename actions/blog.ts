"use server";

import { db } from "@/lib/db";

export const fetchBlogPosts = async (page: number, pageSize: number) => {
  try {
    const count = await db.blogs.count();
    const blogPosts = await db.blogs.findMany({
      take: pageSize,
      skip: (page - 1) * pageSize,
      include: {
        tag: {
          select: {
            tagName: true,
          },
        },
        createdBy: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log(count);

    return { blogPosts, count };
  } catch (error) {
    return { error: "fetching blogs failed" };
  }
};

export const fetchBlogPostById = async (id: string) => {
  try {
    const blogPost = await db.blogs.findUnique({
      where: {
        id,
      },
      include: {
        createdBy: { select: { name: true } },
        tag: { select: { tagName: true } },
      },
    });

    console.log(blogPost);

    return { blogPost };
  } catch (error) {
    return { error: "fetching blogpost by id failed" };
  }
};
