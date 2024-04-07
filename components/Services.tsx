import React from "react";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Services = async ({ locale }: { locale: Locale }) => {
  const { page } = await getDictionary(locale);
  return (
    <MaxWidthWrapper className="px-4 pb-16 ">
      <h1 className="font-bold pb-10 text-center  text-3xl">
        {page.home.services.title}
      </h1>

      <div className="pb-10">
        <div className="flex flex-col gap-6">
          <p className="sm:text-xl font-semibold">
            {page.home.services.tagLine1}
          </p>
          <p className="text-gray-700 font-light sm:text-lg">
            {page.home.services.description1}
          </p>

          <p className="text-gray-700 sm:text-lg font-light">
            {page.home.services.description2}
          </p>
        </div>
      </div>
      <div className="pb-6 text-center text-xl font-semibold">
        <p>{page.home.services.tagLine2}</p>
      </div>
      <div className="flex flex-col gap-16 items-center md:items-start md:justify-center pb-12 m-auto md:flex-row">
        {/* left */}
        <div className="w-80 border rounded-3xl shadow-lg">
          <div>
            <h2 className="text-xl font-semibold p-4 border-b rounded-t-2xl  bg-yellow-300">
              {page.home.services.card1.title}
            </h2>
            <div className="flex flex-col text-muted-foreground py-2">
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>{page.home.services.card1.point1}</p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>{page.home.services.card1.point2}</p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>{page.home.services.card1.point3}</p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                {page.home.services.card1.point4}
                </p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>{page.home.services.card1.point5}</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-80 border rounded-3xl shadow-lg ">
          <div>
            <h2 className="text-xl font-semibold p-4 border-b rounded-t-2xl  bg-black text-white">
            {page.home.services.card2.title}
            </h2>
            <div className="flex flex-col text-muted-foreground py-2">
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                {page.home.services.card2.point1}
                </p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                {page.home.services.card2.point2}
                </p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                {page.home.services.card2.point3}
                </p>
              </div>

              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                {page.home.services.card2.point4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center w-56 m-auto">
        <Link
          href={`/${locale}/services`}
          className="px-6 py-2.5 rounded-lg bg-yellow-300 text-lg font-semibold hover:bg-yellow-200 "
        >
          {page.home.services.applyButton}
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
