import Image from "next/image";
import React from "react";
import { parseISO, format } from "date-fns";
import Link from "next/link";

type TBlogCard = {
  tag: string | undefined;
  mainTitle: string;
  user: string | null;
  createdAt: Date;
  id: string;
  imgUrl: string;
  description: string;
};

const BlogCard = ({
  tag,
  mainTitle,
  user,
  createdAt,
  id,
  imgUrl,
  description,
}: TBlogCard) => {
  return (
    <div className="max-w-[600px] bg-white shadow-lg ">
      <div className="p-4 pt-10 ">
        <div className="overflow-hidden rounded-md">
        <Image className="rounded-md hover:scale-[105%] transition-all duration-500 " src={imgUrl} alt="image" width={350} height={350} 
        layout="responsive" />
        </div>
        
        <p className="mt-2 border  bg-red-700 text-white font-medium text-sm capitalize inline-block px-2 py-1 rounded-sm ">
          {tag}
        </p>
        <h2 className="mt-2 text-xl font-semibold">{mainTitle}</h2>
        <div className="flex gap-4 mt-1 items-center">
          <p className="text-sm ">{user}</p>

          <div className="w-[1px] h-4 bg-gray-500"></div>

          <p className="text-sm ">
            {format(createdAt, "MMMM dd, yyyy")}
          </p>
        </div>

        <p className="pt-2  flex flex-col gap-2   font-light">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
          {description.length > 100 && (
            <Link
              href={`blogs/${id}`}
              className="w-full  font-medium text-center pl-4 py-1.5 bg-yellow-300 px-2  rounded-sm hover:bg-black hover:text-white transition-colors duration-500"
            >
              Read More
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
