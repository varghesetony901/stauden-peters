"use server";
import { db } from "@/lib/db";

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
      console.log(count);

      return { photos, count };
    
    
    } else {
      const tagData = await db.photoTags.findFirst({
        where: {
          tagName: tag,
        },
      });

      const tagId = tagData?.id;

      const countData = await db.photos.findMany({
        where: {
          tagId 
        },
      });

      const count = countData.length;

      console.log(tag);
      console.log(tagId);
      console.log(count);

      const photos = await db.photos.findMany({
        take: pageSize,
        skip: (page - 1) * pageSize,
        where: {
          tagId 
        },
      });

      return { photos, count };
    }
  } catch (error) {
    return { error: "failed to photos" };
  }
};

export const TotalPhotosCount = async () => {
  const count = await db.photos.count();
  return { count };
};
