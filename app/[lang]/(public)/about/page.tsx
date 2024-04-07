import AboutDesc from "@/components/AboutPage/AboutDesc";
import MissionVision from "@/components/AboutPage/MissionVision";
import Team from "@/components/AboutPage/Team";
import React from "react";

const Page = () => {
  return (
    <div className="pt-10 lg:pt-24 flex flex-col gap-12">
      <AboutDesc />
      <MissionVision />
      <Team />
    </div>
  );
};

export default Page;
