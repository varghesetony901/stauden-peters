"use server";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

// 1. upload photos
export const UploadPhotos = async (data: FormData, tagEn : string) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const links: string[] = [];
  const bucketName = process.env.S3_BUCKET;

  const client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  });

  if (!data) {
    return { error: "no data" };
  }

  const files = data.getAll("images") as File[];

  try {
    await Promise.all(
      files.map(async (file) => {
        // validate image file

        if (!file?.type.startsWith("image/")) {
          throw new Error("please upload image file only");
        } else if (file?.size > 1024 * 1024 * 2) {
          throw new Error("please upload image below 2MB");
        } else {
          const randomString = Math.random().toString(36).substring(2, 8);
          const ext = file.name.split(".").pop();
          const newFileName = Date.now() + randomString + "." + ext;
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const type = file.type;
          const folderName = "Images";
          const keyFolderPath = folderName + "/" + newFileName;

          await client.send(
            new PutObjectCommand({
              Bucket: bucketName,
              Key: keyFolderPath,
              Body: buffer,
              // ACL: "public-read",
              ContentType: type,
            })
          );
          const link = `https://${bucketName}.s3.ap-south-1.amazonaws.com/${folderName}/${newFileName}`;

          // push links to links array
          links.push(link);
        }
      })
    );

    links.map(async (link) => {
      await db.photos.create({ data: { imgUrl: link, tagId: tagEn } });
    });

    revalidatePath("/dashboard/photos");

    return { links, message: "Images uploaded successfully" };
  } catch (error) {
    return { error: "Error uploading" };
  }
};

// 2. delete photo by id
export const deletePhotoById = async (id: string) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const bucketName = process.env.S3_BUCKET;
  const folderName = "Images";

  const client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  });


  const existingImage = await db.photos.findUnique({
    where: {
      id,
    },
  });

  const existingImageName = existingImage?.imgUrl.split("/").pop();

  try {
    // remove url from db
    await db.photos.delete({
      where: {
        id,
      },
    });

    //  remove existing image from S3
    await client.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: folderName + "/" + existingImageName,
      })
    );

    revalidatePath("/dashboard/photos");

    return { message: "Photo deleted successfully" };
  } catch (error) {
    return { error: "Error deleting photo" };
  }
};
