"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

// 1. delete blog and photo tags
export const deleteTag = async (id: string, type: string) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  try {
    if (type === "blog-tags") {
      // check if tag associated with blogs
      const blogs = await db.blogs.findMany({
        where: { tagId: { equals: id } },
      });

      if (blogs.length > 0)
        return {
          error:
            "Cannot delete, Tag is associated with blogs. Remove tag from Blogs first.",
        };

      await db.blogTags.delete({
        where: { id },
      });
      revalidatePath("/dashboard/blog-tags");
      return { success: true, message: "Tag deleted successfully" };
    } else {
      // check if tag associated with blogs
      const photos = await db.photos.findMany({
        where: { tagId: { equals: id } },
      });

      if (photos.length > 0)
        return {
          error:
            "Cannot delete, Tag is associated with photos. Remove tag from Photos first.",
        };
      await db.photoTags.delete({
        where: { id },
      });
      revalidatePath("/dashboard/photo-tags");
      return { success: true, message: "Tag deleted successfully" };
    }
  } catch (error) {
    return { error: "could not delete tag" };
  }
};

// 2. delete blogs
export const deleteBlog = async (id: string) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  try {
    const existingBlog = await db.blogs.findUnique({
      where: { id },
    });

    if (!existingBlog) return { error: "Blog not found" };
    const existingBlogImageUrl = existingBlog.imgUrl;
    const existingBlogImageName = existingBlogImageUrl.split("/").pop();

    const bucketName = process.env.S3_BUCKET;
    const folderName = "Blog Images";

    const client = new S3Client({
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
      },
    });

    await db.blogs.delete({
      where: { id },
    });

    //  remove existing image from S3
    await client.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: folderName + "/" + existingBlogImageName,
      })
    );

    revalidatePath("/dashboard/blogs");
    return { success: true, message: "Blog deleted successfully" };
  } catch (error) {
    return { error: "could not delete blog" };
  }
};
