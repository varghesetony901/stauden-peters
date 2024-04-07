import Image from "next/image";
import React from "react";
import { parseISO, format } from "date-fns";
import Link from "next/link";

type TBlogCard = {
  tagEn: string | undefined;
  tagDe: string | undefined;
  mainTitleEn: string;
  mainTitleDe: string;
  user: string | null;
  createdAt: Date;
  id: string;
  imgUrl: string;
  descriptionEn: string;
  descriptionDe: string;
  locale : string;
};

const BlogCard = ({
  tagEn,
  tagDe,
  mainTitleEn,
  mainTitleDe,
  user,
  createdAt,
  id,
  imgUrl,
  descriptionEn,
  descriptionDe,
  locale
}: TBlogCard) => {
  return (
    <div className="relative max-w-[600px] bg-white shadow-lg pb-10">
      <div className=" max-h-[600px] px-4 pt-4 flex flex-col justify-between">
        <div>
          <div className="relative overflow-hidden rounded-md w-full h-72  border ">
            <Image
              className="rounded-md hover:scale-[105%] transition-all duration-500"
              src={imgUrl}
              alt="image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
{locale === "en" ? (
<>
<p className="mt-2 border  bg-red-700 text-white font-medium text-sm capitalize inline-block px-2 py-1 rounded-sm ">
            {tagEn}
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            {mainTitleEn.length > 60 ? `${mainTitleEn.slice(0, 60)}...` : mainTitleEn}
          </h2>

          <div className="flex gap-4 mt-1 items-center border-t pt-2">
            <p className="text-sm ">{user}</p>

            <div className="w-[1px] h-4 bg-gray-500"></div>

            <p className="text-sm ">{format(createdAt, "MMMM dd, yyyy")}</p>
          </div>
          <p className="pt-2  font-light">
            {descriptionEn.length > 100
              ? `${descriptionEn.slice(0, 100)}...`
              : descriptionEn}
          </p>
</>

):(
  <>
   <p className="mt-2 border  bg-red-700 text-white font-medium text-sm capitalize inline-block px-2 py-1 rounded-sm ">
            {tagDe}
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            {mainTitleDe.length > 60 ? `${mainTitleDe.slice(0, 60)}...` : mainTitleDe}
          </h2>

          <div className="flex gap-4 mt-1 items-center border-t pt-2">
            <p className="text-sm ">{user}</p>

            <div className="w-[1px] h-4 bg-gray-500"></div>

            <p className="text-sm ">{format(createdAt, "MMMM dd, yyyy")}</p>
          </div>
          <p className="pt-2  font-light">
            {descriptionDe.length > 100
              ? `${descriptionDe.slice(0, 100)}...`
              : descriptionDe}
          </p>
  </>
)}
         
        </div>
        <div className="py-2 flex">
          <Link
            href={`blogs/${id}`}
            className="absolute bottom-3.5 font-medium text-center  py-1.5 px-2 bg-yellow-300   rounded-sm hover:bg-black hover:text-white transition-colors duration-500"
          >
           {locale === "en" ? "Read More" : "mehr lesen"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
