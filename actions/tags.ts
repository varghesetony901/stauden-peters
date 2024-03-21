"use server";
import { db } from "@/lib/db";

export const fetchPhotoTags = async () => {
  try {
    const response = await db.photoTags.findMany();
    return { response };
  } catch (error) {
    return { error: "could not fetch photo tags" };
  }
};

// fetch with limit

export const fetchPhotosByTag = async (
  page: number,
  pageSize: number,
  tag?: string
) => {
  console.log(tag);

  try {
    if (tag === "All") {
      // check count of ducuments
      const itemCount = await db.photos.count();
      console.log(itemCount);
      

      const response = await db.photos.findMany({
            take: pageSize,
            skip: (page - 1) * pageSize,
      });
      const photos = response;
      // console.log(response.map(item=>item.photos));
      return { photos, itemCount };
    } else {
      // check count of ducuments
      const itemCount = await db.photoTags.findMany({
        where: { tagName: tag },
        include: { photos: true },
      });
      console.log(itemCount);

      const response = await db.photoTags.findMany({
        where: { tagName: tag },
        include: {
          photos: {
            take: pageSize,
            skip: (page - 1) * pageSize,
          },
        },
      });
      const photos = response.map((item) => item.photos);
      // console.log(response.map(item=>item.photos));
      return { photos, itemCount };
    }
  } catch (error) {
    return { error: "could not fetch photos by tag" };
  }
};


