import React from "react";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

const Team = async ({locale} : {locale : Locale}) => {
  const { page } = await getDictionary(locale);
  return (
    <MaxWidthWrapper className="px-4 lg:px-6 md:px-10 pt-16 pb-10">
      {/* Title & Tagline */}
      <div className="mx-auto  mb-8 lg:mb-16">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 text-center">{page.home.team.title}</h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-lg ">
        {page.home.team.description}
        </p>
      </div>

      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <div className="flex flex-col md:flex-row items-center shadow md:shadow-lg hover:scale-[102%] duration-300">
          <div>
            <img
              className=" rounded-lg  "
              src="https://career-at-germany-de.s3.ap-south-1.amazonaws.com/static+images/zell.jpg"
              alt="image_CEO_CAG_UG"
            />
          </div>

          <div className="px-4 py-4 flex flex-col items-center text-center  w-full h-full md:justify-center rounded-r-lg md:rounded-l-none">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900  ">
              Francesco Zell
            </h3>
            <span className="text-gray-500 text-sm sm:text-base">
              CEO, C@G Recruting UG
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center shadow md:shadow-lg hover:scale-[102%] duration-300">
          <div>
            <img className=" rounded-lg  " src="https://career-at-germany-de.s3.ap-south-1.amazonaws.com/static+images/jomy.jpg" alt="image_MD_CAG" />
          </div>

          <div className="px-4 py-4 flex flex-col items-center text-center  w-full h-full md:justify-center rounded-r-lg md:rounded-l-none">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900  ">
              Jomy Joseph
            </h3>
            <span className="text-gray-500 text-sm sm:text-base">
              CEO, 
              <Link href="https://www.careeratgermany.com/" target="_blank">
                <span> Career@Germany</span>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center shadow md:shadow-lg hover:scale-[102%] duration-300">
          <div>
            <img
              className=" rounded-lg  "
              src="https://career-at-germany-de.s3.ap-south-1.amazonaws.com/static+images/bijith.jpg"
              alt="image_MD_CAG"
            />
          </div>

          <div className="px-4 py-4 flex flex-col items-center text-center  w-full h-full md:justify-center rounded-r-lg md:rounded-l-none">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900  ">
              Bijith Kurian
            </h3>
            <span className="text-gray-500 text-sm sm:text-base">
              Managing Director, 
              <Link href="https://www.careeratgermany.com/" target="_blank">
                <span> Career@Germany</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Team;
