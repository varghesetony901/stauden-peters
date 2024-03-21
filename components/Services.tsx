import React from "react";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import Link from "next/link";

const Services = () => {
  return (
    <MaxWidthWrapper className="px-4 pb-16 ">
      <h1 className="font-bold pb-10 text-center  text-3xl">Services</h1>

      <div className="pb-10">
        <div className="flex flex-col gap-6">
          <p className="sm:text-xl font-semibold">
            Are you looking for trainees or looking for a training position?
            Then you are exactly right here!
          </p>
          <p className="text-gray-700 font-light sm:text-lg">
            Through our network and connections with, among others, small,
            medium-sized and large companies as well as schools, clubs and other
            channels in various regions and already 16 countries worldwide, we
            bring trainees directly together with training companies.
          </p>

          <p className="text-gray-700 sm:text-lg font-light">
            Our personnel consulting management for trainees includes, among
            other things, a careful selection of trainees and trainers.
          </p>
        </div>
      </div>
      <div className="pb-6 text-center text-xl font-semibold">
        <p>Advantages of our services</p>
      </div>
      <div className="flex flex-col gap-16 items-center md:items-start md:justify-center pb-12 m-auto md:flex-row">
        {/* left */}
        <div className="w-80 border rounded-3xl shadow-lg">
          <div>
            <h2 className="text-xl font-semibold p-4 border-b rounded-t-2xl  bg-yellow-300">
              For Trainees
            </h2>
            <div className="flex flex-col text-muted-foreground py-2">
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>Support of application measures</p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>Support in choosing a career</p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>Search for suitable companies</p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                  We arrange the interview and accompany you [if desired]{" "}
                </p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p>Support in the early days</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-80 border rounded-3xl shadow-lg ">
          <div>
            <h2 className="text-xl font-semibold p-4 border-b rounded-t-2xl  bg-black text-white">
              For Companies
            </h2>
            <div className="flex flex-col text-muted-foreground py-2">
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                  Taking over the complex search for trainees
                </p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                  Elimination of costs for, among other things, advertising and
                  enormous time savings
                </p>
              </div>
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                  Optimized pre-selection/selection process
                </p>
              </div>
              
              <div className="flex gap-4 items-center px-4 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <p className="flex-1">
                  Accompanying the trainees in the early days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center w-56 m-auto">
        <Link
          href={"/services"}
          className="px-6 py-2.5 rounded-lg bg-yellow-300 text-lg font-semibold hover:bg-yellow-200 "
        >
          Apply Now
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
