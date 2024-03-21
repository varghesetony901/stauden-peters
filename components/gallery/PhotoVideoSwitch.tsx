"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PhotoVideoSwitch = () => {
  const [color, setColor] = useState("active");
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const toogleContentVideo = () => {
    const params = new URLSearchParams(searchParams);
    params.set("type", "photo");

    replace(`${pathname}?${params}`);
    setColor("active");
  };
  const toogleContentPhoto = () => {
    const params = new URLSearchParams(searchParams);
    params.set("type", "video");
    params.delete("tag");
    params.delete("pageNumber");

    replace(`${pathname}?${params}`);
    setColor("not-active");
  };

  return (
    <>
      <div className="flex gap-4 justify-center my-4 mb-6">
        <p
          onClick={toogleContentVideo}
          className={cn(
            "shadow-md py-1 px-2 bg-black hover:bg-gray-800 text-white inline-block rounded-sm cursor-pointer font-semibold",
            {
              "bg-yellow-300 hover:bg-yellow-200 text-black":
                color === "active",
            }
          )}
        >
          Photos
        </p>
        <p
          onClick={toogleContentPhoto}
          className={cn(
            "shadow-md py-1 px-2  bg-black  hover:bg-gray-800 inline-block rounded-sm cursor-pointer text-white font-semibold",
            {
              "bg-yellow-300 hover:bg-yellow-200 text-black":
                color === "not-active",
            }
          )}
        >
          Videos
        </p>
      </div>
      <div className="border-t border-yellow-300 w-64 mx-auto pb-4"></div>
    </>
  );
};

export default PhotoVideoSwitch;
