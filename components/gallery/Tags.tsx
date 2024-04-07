"use client";
import { cn } from "@/lib/utils";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

const Tags = ({ photoTags }: { photoTags: string[] | undefined }) => {
  const findLocale = useParams();
  const locale = findLocale.lang;
  const [activeTag, setActiveTag] = useState(locale === "en" ? "All" : "Alle");
  console.log(locale);

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
    if (locale === "en") {
      setActiveTag("All");
      params.set("tag", "All");
      replace(`${pathname}?${params.toString()}`);
    } else {
      setActiveTag("Alle");
      params.set("tag", "Alle");
      replace(`${pathname}?${params.toString()}`);
    }
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

        {locale === "en" ? (
          <p
            className={cn(
              "shadow-md py-1 px-2 bg-gray-500 inline-block rounded-sm cursor-pointer text-white font-semibold",
              { "bg-yellow-300 text-black": activeTag === "All" }
            )}
            onClick={handleFilterTag}
          >
            All
          </p>
        ) : (
          <p
            className={cn(
              "shadow-md py-1 px-2 bg-gray-500 inline-block rounded-sm cursor-pointer text-white font-semibold",
              { "bg-yellow-300 text-black": activeTag === "Alle" }
            )}
            onClick={handleFilterTag}
          >
            Alle
          </p>
        )}
      </div>
    </>
  );
};

export default Tags;
