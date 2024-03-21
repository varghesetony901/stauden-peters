"use client";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Skeleton } from "@/components/ui/skeleton";

import DataFormCompany from "@/components/DataFormCompany";
import DataFormTrainee from "@/components/DataFormTrainee";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Wrapper from "@/components/animation-wrapper/Wrapper";

const Page = () => {
  const [isTrainee, setIsTrainee] = useState<string | undefined>();

  return (
    <Wrapper>
      <MaxWidthWrapper className="py-12">
        <h1 className="font-bold pb-6  text-center text-3xl">Services</h1>
        <div className=" pb-6 text-center flex flex-col gap-2">
          <p className="font-semibold">
            You can start applying for your requirement. For more information
            about the exact procedure, send in the following form, with
            absolutely no obligation.
          </p>
          <p className="text-red-500">
            * Please be aware that, you can only send one request at a time. So
            try to include accurate details in the form not to miss your chance
            reaching us. Once we resolve your request, you can try again. Incase
            you find something difficult during the process, you can mail us
            through the contact page.
          </p>
          <p className="pt-2">
            One of our employees will contact you within 72 hours.
          </p>
          <p className="pt-2 font-semibold ">
            You are also welcome to contact us directly on
            <span className="text-lg font-bold"> +49 15 14 20 53 907</span>
          </p>
        </div>
        {/* choose category */}
        <div className="w-full mb-6">
          <p className="text-center mb-4">
            Please choose a category to proceed further.
          </p>
          <Select
            onValueChange={(e) => {
              setIsTrainee(e);
              console.log(e);
            }}
          >
            <SelectTrigger className="sm:w-80 rounded-xl m-auto border border-red-400 focus:border-none focus:outline-none focus:ring-1 focus:ring-red-600">
              <SelectValue placeholder="Select category *" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="trainee">Trainee</SelectItem>
                <SelectItem value="company">Company</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* skeleton */}
        {isTrainee === undefined && (
          <div className="md:w-[600px] flex flex-col gap-4 pb-16 m-auto">
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[30px] w-full rounded-xl" />
          </div>
        )}

        {/* form 1 */}

        {isTrainee === "trainee" && <DataFormTrainee />}

        {/* form 2 */}

        {isTrainee === "company" && <DataFormCompany />}
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Page;
