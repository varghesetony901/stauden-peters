"use server";

import { TTagsFileSchema } from "@/app/[lang]/dashboard/_components/TagsForm";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath, revalidateTag } from "next/cache";

// 1. fetch all blog tags
export const fetchAllBlogTags = async () => {
  const response = await db.blogTags.findMany();
  return { response };
};

// 2. create blog tag
export const createBlogTag = async (data: TTagsFileSchema) => {
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
    // check duplicate
    const duplicate = await db.blogTags.findFirst({
      where: { tagNameEn: data.tagNameEn },
    });
    if (duplicate) {
      return { error: "Tag already exists" };
    }
    // create blog tag
    await db.blogTags.create({
      data,
    });
    revalidatePath("/dashboard/blog-tags");
    return { success: true, message: "Tag created successfully" };
  } catch (error) {
    return { error: "could not create tag" };
  }
};

// 3. fetch blog tags with limit
export const fetchBlogTags = async (page: number, pageSize: number) => {
  const response = await db.blogTags.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  return { response };
};

// 4. fetch blog tags count
export const fetchBlogTagsCount = async () => {
  const count = await db.blogTags.count();
  return { count };
};

// 5. Photo Tags Section
export const fetchPhotoTags = async () => {
  const response = await db.photoTags.findMany();
  return { response };
};

// 6. fetch photo tags to backend
export const fetchPhotoTagData  = async (page: number, pageSize: number) => {
  const response =  await db.photoTags.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  console.log(response);
  
  return { response };
};

// 7. fetch photo tags count
export const fetchPhotoTagsCount = async () => {
  const count = await db.photoTags.count();
  return { count };
};

// 8. create photo tags
export const createPhotoTag = async (data: TTagsFileSchema) => {
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
    // check duplicate
    const duplicate = await db.photoTags.findFirst({
      where: { tagNameEn: data.tagNameEn },
    });
    if (duplicate) {
      return { error: "Tag already exists" };
    }
    // create blog tag
    await db.photoTags.create({
      data,
    });
    revalidatePath("/dashboard/photo-tags");
    return { success: true, message: "Tag created successfully" };
  } catch (error) {
    return { error: "could not create tag" };
  }
};

// 9. fetch with limit
export const fetchPhotosByTag = async (
  page: number,
  pageSize: number,
  tag?: string
) => {
  try {
    if (tag === "All") {
      // check count of ducuments
      const itemCount = await db.photos.count();

      const response = await db.photos.findMany({
        take: pageSize,
        skip: (page - 1) * pageSize,
      });
      const photos = response;

      return { photos, itemCount };
    } else {
      // check count of ducuments
      const itemCount = await db.photoTags.findMany({
        where: { tagNameEn: tag },
        include: { photos: true },
      });

      const response = await db.photoTags.findMany({
        where: { tagNameEn: tag },
        include: {
          photos: {
            take: pageSize,
            skip: (page - 1) * pageSize,
          },
        },
      });
      const photos = response.map((item) => item.photos);

      return { photos, itemCount };
    }
  } catch (error) {
    return { error: "could not fetch photos by tag" };
  }
};

// 10. edit tags

export const editTag = async (id: string, type: string, data: {tagNameEn : string, tagNameDe : string}) => {
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
    if(type === "blog-tags"){
      await db.blogTags.update({
        where: { id },
        data: { tagNameEn : data.tagNameEn, tagNameDe : data.tagNameDe },
      });
      revalidatePath("/dashboard/blog-tags");
      return {message : "tag edited successfully"}
    }
    if(type === "photo-tags"){
      await db.photoTags.update({
        where: { id },
        data: { tagNameEn : data.tagNameEn, tagNameDe : data.tagNameDe },
      });
      revalidatePath("/dashboard/photo-tags");
      return {message : "tag edited successfully"}
    }
    
  } catch (error) {
    return { error: "could not edit tag" };
  }
};
