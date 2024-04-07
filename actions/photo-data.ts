"use server";
import { db } from "@/lib/db";

// 1. fetch photos
export const fetchPhotoData = async (
  page: number,
  pageSize: number,
  tag: string
) => {
  try {
    if (tag === "All") {
      const count = await db.photos.count();
      const photos = await db.photos.findMany({
        take: pageSize,
        skip: (page - 1) * pageSize,
      });

      return { photos, count };
    } else {
      const tagData = await db.photoTags.findFirst({
        where: {
          OR : [
            {tagNameEn : {equals : tag}},
            {tagNameDe : {equals : tag}}
          ]
        },
      });

      const tagId = tagData?.id;

      const countData = await db.photos.findMany({
        where: {
          tagId,
        },
      });

      const count = countData.length;

      const photos = await db.photos.findMany({
        take: pageSize,
        skip: (page - 1) * pageSize,
        where: {
          tagId,
        },
      });

      return { photos, count };
    }
  } catch (error) {
    return { error: "failed to fetch photos" };
  }
};

export const TotalPhotosCount = async () => {
  const count = await db.photos.count();
  return { count };
};
