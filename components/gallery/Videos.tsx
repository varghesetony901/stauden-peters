"use client";
import { videoData } from "@/actions/video-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoPlayCircleSharp } from "react-icons/io5";
import { Skeleton } from "../ui/skeleton";

const Videos = () => {
  const [videos, setVideos] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchVideos = async () => {
    const resp = await videoData();
    setVideos(resp.res.items);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return <>
    {isLoading ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center my-6 ">
        <Skeleton className="w-full h-[400px] bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-[400px] bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-[400px] bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-[400px] bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-[400px] bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-[400px] bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-[400px] bg-gray-200 animate-pulse" />
      </div>
    ) : (
      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center my-6 ">
          {videos?.map((data: any) => (
            <Link
              key={data.snippet.resourceId.videoId}
              href={`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}
              target="_blank"
              className="relative hover:scale-[102%] hover:brightness-75 transition-all duration-300"
            >
              <Image
                alt="image"
                src={data.snippet.thumbnails.high.url}
                width={600}
                height={400}
                className=""
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <div className="absolute inset-0 flex justify-center items-center ">
                <div className="bg-white rounded-full flex justify-center items-center">
                  <IoPlayCircleSharp size={50} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="inline-block">
          <Link
            href="https://www.youtube.com/@careeratgermany8971"
            target="_blank"
            className="flex items-center gap-2"
          >
            <p className="underline text-gray-800 hover:text-blue-700">
              Watch more videos on our youtube channel
            </p>
            <FaCircleArrowRight size={18} />
          </Link>
        </div>
      </div>
    )}
  </>;
};

export default Videos;
