"use client";
import { fetchBlogPostById } from "@/actions/blog";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Skeleton } from "@/components/ui/skeleton";

import { format } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  mainTitleEn: string;
  mainTitleDe: string;
  imgUrl: string;
  descriptionEn: string;
  descriptionDe: string;
  subTitleEn1: string | null;
  subTitleDe1: string | null;
  paragraphEn1: string | null;
  paragraphDe1: string | null;
  subTitleEn2: string | null;
  subTitleDe2: string | null;
  paragraphEn2: string | null;
  paragraphDe2: string | null;
  subTitleEn3: string | null;
  subTitleDe3: string | null;
  paragraphEn3: string | null;
  paragraphDe3: string | null;
  subTitleEn4: string | null;
  subTitleDe4: string | null;
  paragraphEn4: string | null;
  paragraphDe4: string | null;
  tagId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: {
    name: string | null;
  } | null; // createdBy field is optional and can be null
  tag: {
    tagNameEn: string;
    tagNameDe: string;
  } | null; // tag field is optional and can be null
}

const Page = () => {
  const params = useParams();
  console.log(params);
  const loacle = params.lang as string;

  const [postById, setPostById] = useState<BlogPost | null>();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const postId = id as string;
      const post = await fetchBlogPostById(postId);

      setPostById(post?.blogPost);
    };

    fetchData();
  }, []);

  if (!postById) {
    return (
      <Wrapper>
        <div className="pt-12 lg:pt-24 md:w-[600px] flex flex-col gap-4 pb-16 m-auto px-2">
          <Skeleton className="bg-gray-200 h-[30px] w-32 rounded-xl m-auto" />
          <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
          <div className="flex justify-center gap-6 items-center">
            <Skeleton className="bg-gray-200 h-[10px] w-32 rounded-xl " />
            <Skeleton className="bg-gray-200 h-[10px] w-32 rounded-xl" />
          </div>

          <Skeleton className="bg-gray-200 h-[400px] w-full rounded-xl mt-4" />

          <Skeleton className="bg-gray-200 h-[10px] w-full rounded-xl" />
          <Skeleton className="bg-gray-200 h-[10px] w-full rounded-xl" />
          <Skeleton className="bg-gray-200 h-[10px] w-full rounded-xl" />
          <Skeleton className="bg-gray-200 h-[10px] w-full rounded-xl" />
          <Skeleton className="bg-gray-200 h-[10px] w-full rounded-xl" />
          <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl mt-4" />
          <Skeleton className="bg-gray-200 h-[10px] w-full rounded-xl" />
          <Skeleton className="bg-gray-200 h-[10px] w-full rounded-xl" />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        {loacle === "en" ? (
          <MaxWidthWrapper className="py-10 lg:pt-24 ">
            {/* Title section */}
            <div className="flex flex-col items-center gap-2 my-6">
              <div className="bg-yellow-400 p-2 py-1 rounded-sm text-sm font-semibold ">
                <p>{postById?.tag?.tagNameEn}</p>
              </div>
              <h1 className="text-3xl font-medium capitalize">
                {postById?.mainTitleEn}
              </h1>
              <div className="flex gap-4 items-center">
                <p className="text-sm text-gray-500">
                  {postById?.createdBy?.name}
                </p>
                <div className="w-[1px] h-4 bg-gray-500"></div>
                <p className="text-sm text-gray-500">
                  {format(postById.createdAt, "MMMM dd, yyyy")}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center max-w-2xl sm:max-h-96 m-auto roun">
              <Image
                alt="image"
                src={postById.imgUrl}
                width={500}
                height={300}
                className="rounded-md object-cover"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            {/* Content */}
            <div>
              {/* description */}
              <p className="text-lg text-muted-foreground font-light pt-10">
                {postById.descriptionEn}
              </p>

              {/* subtitle */}
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleEn1}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphEn1}
              </p>
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleEn2}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphEn2}
              </p>
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleEn3}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphEn3}
              </p>
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleEn4}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphEn4}
              </p>
            </div>
          </MaxWidthWrapper>
        ) : (
          <MaxWidthWrapper className="py-10 lg:pt-24 ">
            {/* Title section */}
            <div className="flex flex-col items-center gap-2 my-6">
              <div className="bg-yellow-400 p-2 py-1 rounded-sm text-sm font-semibold ">
                <p>{postById?.tag?.tagNameDe}</p>
              </div>
              <h1 className="text-3xl font-medium capitalize text-center">
                {postById?.mainTitleDe}
              </h1>
              <div className="flex gap-4 items-center">
                <p className="text-sm text-gray-500">
                  {postById?.createdBy?.name}
                </p>
                <div className="w-[1px] h-4 bg-gray-500"></div>
                <p className="text-sm text-gray-500">
                  {format(postById.createdAt, "MMMM dd, yyyy")}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center max-w-2xl sm:max-h-96 m-auto roun">
              <Image
                alt="image"
                src={postById.imgUrl}
                width={500}
                height={300}
                className="rounded-md object-cover"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            {/* Content */}
            <div>
              {/* description */}
              <p className="text-lg text-muted-foreground font-light pt-10">
                {postById.descriptionDe}
              </p>

              {/* subtitle */}
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleDe1}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphDe1}
              </p>
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleDe2}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphDe2}
              </p>
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleDe3}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphDe3}
              </p>
              <p className="text-lg font-semibold pt-4">
                {postById.subTitleDe4}
              </p>
              <p className="text-lg text-muted-foreground font-light">
                {postById.paragraphDe4}
              </p>
            </div>
          </MaxWidthWrapper>
        )}
      </div>
    </Wrapper>
  );
};

export default Page;
