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
  mainTitle: string;
  imgUrl: string;
  description: string;
  subTitle1: string | null;
  paragraph1: string | null;
  subTitle2: string | null;
  paragraph2: string | null;
  subTitle3: string | null;
  paragraph3: string | null;
  subTitle4: string | null;
  paragraph4: string | null;
  tagId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: {
    name: string | null;
  } | null; // createdBy field is optional and can be null
  tag: {
    tagName: string;
  } | null; // tag field is optional and can be null
}

const Page = () => {
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
        <div className=" mt-16 md:w-[600px] flex flex-col gap-4 pb-16 m-auto px-2">
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
        <MaxWidthWrapper className="py-10">
          {/* Title section */}
          <div className="flex flex-col items-center gap-2 my-6">
            <div className="bg-yellow-400 p-2 py-1 rounded-sm text-sm font-semibold ">
              <p>{postById?.tag?.tagName}</p>
            </div>
            <h1 className="text-3xl font-medium capitalize">
              {postById?.mainTitle}
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
              layout="responsive"
              className="rounded-md object-cover"
            />
          </div>

          {/* Content */}
          <div>
            {/* description */}
            <p className="text-lg text-muted-foreground font-light pt-10">
              {postById.description}
            </p>

            {/* subtitle */}
            <p className="text-lg font-semibold pt-4">{postById.subTitle1}</p>
            <p className="text-lg text-muted-foreground font-light">
              {postById.paragraph1}
            </p>
            <p className="text-lg font-semibold pt-4">{postById.subTitle2}</p>
            <p className="text-lg text-muted-foreground font-light">
              {postById.paragraph2}
            </p>
            <p className="text-lg font-semibold pt-4">{postById.subTitle3}</p>
            <p className="text-lg text-muted-foreground font-light">
              {postById.paragraph3}
            </p>
            <p className="text-lg font-semibold pt-4">{postById.subTitle4}</p>
            <p className="text-lg text-muted-foreground font-light">
              {postById.paragraph4}
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </Wrapper>
  );
};

export default Page;
