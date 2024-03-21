"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Tags = ({ photoTags }: { photoTags: string[] | undefined }) => {
  const [activeTag, setActiveTag] = useState("All");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const filterByTag = async (tag: string) => {
    params.set("pageNumber", "1");
    params.set("tag", tag);
    replace(`${pathname}?${params.toString()}`);
    setActiveTag(tag);
  };

  const handleFilterTag = async () => {
    setActiveTag("All");
    params.set("tag","All");
    replace(`${pathname}?${params.toString()}`);

  };

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center my-4">
        {photoTags?.map((tag) => (
          <p
          key={tag}
            className={cn(
              "shadow-md py-1 px-2 bg-gray-500 inline-block rounded-sm cursor-pointer text-white font-semibold capitalize",
              { "bg-yellow-300 text-black": activeTag === tag }
            )}
            onClick={() => filterByTag(tag)}
          >
            {tag}
          </p>
        ))}
        <p
          className={cn(
            "shadow-md py-1 px-2 bg-gray-500 inline-block rounded-sm cursor-pointer text-white font-semibold",
            { "bg-yellow-300 text-black": activeTag === "All" }
          )}
          onClick={handleFilterTag}
        >
          All
        </p>
      </div>
    </>
  );
};

export default Tags;
