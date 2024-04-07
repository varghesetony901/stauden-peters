import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import React from "react";

const Page = () => {
  return (
    <div className="py-10 lg:pt-24 ">
      <MaxWidthWrapper className="text-gray-500">
        <h1 className="font-bold pb-6 lg:pb-0 text-center text-3xl text-black">
          Products
        </h1>
        <h2 className="text-xl text-center py-6 ">
          With the experience and know-how of three generations, we supply
          various wholesale customers throughout Germany and more than a dozen
          other countries with grasses and perennials.
        </h2>
        <p className="text-center text-lg">
          We now produce at three different locations and strive for only the
          best quality.
        </p>

        {/* TODO */}
        {/* <ProductsTag/> */}

        
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
