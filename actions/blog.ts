"use server";

import { db } from "@/lib/db";
import { BlogSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";

// 1. fetch blog posts
export const fetchBlogPosts = async (page: number, pageSize: number) => {
  try {
    const count = await db.blogs.count();
    const blogPosts = await db.blogs.findMany({
      take: pageSize,
      skip: (page - 1) * pageSize,
      include: {
        tag: {
          select: {
            tagNameEn: true,
            tagNameDe: true,
          },
        },
        createdBy: {
          select: {
            name: true,
          },
        },
      },
    });

    return { blogPosts, count };
  } catch (error) {
    return { error: "fetching blogs failed" };
  }
};

// 2. fetch blog post by id
export const fetchBlogPostById = async (id: string) => {
  try {
    const blogPost = await db.blogs.findUnique({
      where: {
        id,
      },
      include: {
        createdBy: { select: { name: true } },
        tag: { select: { tagNameEn: true, tagNameDe: true } },
      },
    });

    return { blogPost };
  } catch (error) {
    return { error: "fetching blogpost by id failed" };
  }
};

// 3. create blog
export const createBlog = async (data: FormData) => {
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

  const client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  });

  const blogData = {
    userId: data.get("userId") as string,
    mainTitleEn: data.get("mainTitleEn") as string,
    mainTitleDe: data.get("mainTitleDe") as string,
    descriptionEn: data.get("descriptionEn") as string,
    descriptionDe: data.get("descriptionDe") as string,
    imgUrl: data.get("imgUrl") as File, // Assuming imgUrl is for uploading images
    tagId: data.get("tagId") as string,
    subTitleEn1: data.get("subTitleEn1") as string,
    paragraphEn1: data.get("paragraphEn1") as string,
    subTitleEn2: data.get("subTitleEn2") as string,
    paragraphEn2: data.get("paragraphEn2") as string,
    subTitleEn3: data.get("subTitleEn3") as string,
    paragraphEn3: data.get("paragraphEn3") as string,
    subTitleEn4: data.get("subTitleEn4") as string,
    paragraphEn4: data.get("paragraphEn4") as string,

    subTitleDe1: data.get("subTitleDe1") as string,
    paragraphDe1: data.get("paragraphDe1") as string,
    subTitleDe2: data.get("subTitleDe2") as string,
    paragraphDe2: data.get("paragraphDe2") as string,
    subTitleDe3: data.get("subTitleDe3") as string,
    paragraphDe3: data.get("paragraphDe3") as string,
    subTitleDe4: data.get("subTitleDe4") as string,
    paragraphDe4: data.get("paragraphDe4") as string,
  };

  console.log(blogData);


  const validatedData = BlogSchema.safeParse(blogData);

  if (validatedData.success) {
    // file storing to AWS S3
    const imageFile = blogData.imgUrl;

    const randomString = Math.random().toString(36).substring(2, 8);
    const ext = imageFile.name.split(".").pop();
    const newFileName = Date.now() + randomString + "." + ext;
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const type = imageFile.type;
    const folderName = "Blog Images";
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

    const filteredData = {
      userId: blogData.userId,
      mainTitleEn: blogData.mainTitleEn,
      mainTitleDe: blogData.mainTitleDe,
      descriptionEn: blogData.descriptionEn,
      descriptionDe: blogData.descriptionDe,
      imgUrl: link,
      tagId: blogData.tagId,
      subTitleEn1: blogData.subTitleEn1,
      paragraphEn1: blogData.paragraphEn1,
      subTitleEn2: blogData.subTitleEn2,
      paragraphEn2: blogData.paragraphEn2,
      subTitleEn3: blogData.subTitleEn3,
      paragraphEn3: blogData.paragraphEn3,
      subTitleEn4: blogData.subTitleEn4,
      paragraphEn4: blogData.paragraphEn4,

      subTitleDe1: blogData.subTitleDe1,
      paragraphDe1: blogData.paragraphDe1,
      subTitleDe2: blogData.subTitleDe2,
      paragraphDe2: blogData.paragraphDe2,
      subTitleDe3: blogData.subTitleDe3,
      paragraphDe3: blogData.paragraphDe3,
      subTitleDe4: blogData.subTitleDe4,
      paragraphDe4: blogData.paragraphDe4,
    };

    await db.blogs.create({ data: filteredData });
    revalidatePath("/dashboard/blogs");
    return { message: "Blog created successfully" };
  } else {
    console.log("error");
    
    return { error: validatedData.error.errors[0].message };
  }
};

// 4. edit blog
export const editBlog = async (data: FormData, blogId: string | undefined) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  // check for new Image or null
  const checkImage = data.get("imgUrl") as File;

  if (checkImage.size === 0) {
    const blogData = {
      userId: data.get("userId") as string,
      mainTitleEn: data.get("mainTitleEn") as string,
      mainTitleDe: data.get("mainTitleDe") as string,
      descriptionEn: data.get("descriptionEn") as string,
      descriptionDe: data.get("descriptionDe") as string,

      tagId: data.get("tagId") as string,
      subTitleEn1: data.get("subTitleEn1") as string,
      paragraphEn1: data.get("paragraphEn1") as string,
      subTitleEn2: data.get("subTitleEn2") as string,
      paragraphEn2: data.get("paragraphEn2") as string,
      subTitleEn3: data.get("subTitleEn3") as string,
      paragraphEn3: data.get("paragraphEn3") as string,
      subTitleEn4: data.get("subTitleEn4") as string,
      paragraphEn4: data.get("paragraphEn4") as string,
  
      subTitleDe1: data.get("subTitleDe1") as string,
      paragraphDe1: data.get("paragraphDe1") as string,
      subTitleDe2: data.get("subTitleDe2") as string,
      paragraphDe2: data.get("paragraphDe2") as string,
      subTitleDe3: data.get("subTitleDe3") as string,
      paragraphDe3: data.get("paragraphDe3") as string,
      subTitleDe4: data.get("subTitleDe4") as string,
      paragraphDe4: data.get("paragraphDe4") as string,
    };

    const validatedData = BlogSchema.safeParse(blogData);

    if (validatedData.success) {
      await db.blogs.update({
        where: {
          id: blogId,
        },
        data: blogData,
      });
      revalidatePath("/dashboard/blogs");
      return { message: "Blog edited successfully" };
    } else {
      return { error: validatedData.error.errors[0].message };
    }
  } else {
    const existingBlog = await db.blogs.findFirst({ where: { id: blogId } });

    const existingBlogImageUrl = existingBlog?.imgUrl;

    const bucketName = process.env.S3_BUCKET;

    const client = new S3Client({
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
      },
    });

    const blogData = {
     userId: data.get("userId") as string,
    mainTitleEn: data.get("mainTitleEn") as string,
    mainTitleDe: data.get("mainTitleDe") as string,
    descriptionEn: data.get("descriptionEn") as string,
    descriptionDe: data.get("descriptionDe") as string,
    imgUrl: data.get("imgUrl") as File, // Assuming imgUrl is for uploading images
    tagId: data.get("tagId") as string,
    subTitleEn1: data.get("subTitleEn1") as string,
    paragraphEn1: data.get("paragraphEn1") as string,
    subTitleEn2: data.get("subTitleEn2") as string,
    paragraphEn2: data.get("paragraphEn2") as string,
    subTitleEn3: data.get("subTitleEn3") as string,
    paragraphEn3: data.get("paragraphEn3") as string,
    subTitleEn4: data.get("subTitleEn4") as string,
    paragraphEn4: data.get("paragraphEn4") as string,

    subTitleDe1: data.get("subTitleDe1") as string,
    paragraphDe1: data.get("paragraphDe1") as string,
    subTitleDe2: data.get("subTitleDe2") as string,
    paragraphDe2: data.get("paragraphDe2") as string,
    subTitleDe3: data.get("subTitleDe3") as string,
    paragraphDe3: data.get("paragraphDe3") as string,
    subTitleDe4: data.get("subTitleDe4") as string,
    paragraphDe4: data.get("paragraphDe4") as string,
    };

    const validatedData = BlogSchema.safeParse(blogData);

    if (validatedData.success) {
      // file stored to AWS S3
      const imageFile = blogData.imgUrl;

      const randomString = Math.random().toString(36).substring(2, 8);
      const ext = imageFile.name.split(".").pop();
      const newFileName = Date.now() + randomString + "." + ext;
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const type = imageFile.type;
      const folderName = "Blog Images";

      // upload image to S3
      await client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: folderName + "/" + newFileName,
          Body: buffer,
          // ACL: "public-read",
          ContentType: type,
        })
      );
      const link = `https://${bucketName}.s3.ap-south-1.amazonaws.com/${folderName}/${newFileName}`;

      //  remove existing image from S3
      const existingBlogImageName = existingBlogImageUrl?.split("/").pop();
      await client.send(
        new DeleteObjectCommand({
          Bucket: bucketName,
          Key: folderName + "/" + existingBlogImageName,
        })
      );

      const filteredData = {
        userId: blogData.userId,
        mainTitleEn: blogData.mainTitleEn,
        mainTitleDe: blogData.mainTitleDe,
        descriptionEn: blogData.descriptionEn,
        descriptionDe: blogData.descriptionDe,
        imgUrl: link,
        tagId: blogData.tagId,
        subTitleEn1: blogData.subTitleEn1,
        paragraphEn1: blogData.paragraphEn1,
        subTitleEn2: blogData.subTitleEn2,
        paragraphEn2: blogData.paragraphEn2,
        subTitleEn3: blogData.subTitleEn3,
        paragraphEn3: blogData.paragraphEn3,
        subTitleEn4: blogData.subTitleEn4,
        paragraphEn4: blogData.paragraphEn4,
  
        subTitleDe1: blogData.subTitleDe1,
        paragraphDe1: blogData.paragraphDe1,
        subTitleDe2: blogData.subTitleDe2,
        paragraphDe2: blogData.paragraphDe2,
        subTitleDe3: blogData.subTitleDe3,
        paragraphDe3: blogData.paragraphDe3,
        subTitleDe4: blogData.subTitleDe4,
        paragraphDe4: blogData.paragraphDe4,
      };

      await db.blogs.update({
        where: {
          id: blogId,
        },
        data: filteredData,
      });
      revalidatePath("/dashboard/blogs");
      return { message: "Blog edited successfully" };
    } else {
      return { error: validatedData.error.errors[0].message };
    }
  }
};
