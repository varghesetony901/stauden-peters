import React from "react";
import Title from "./_components/Title";
import Link from "next/link";


const Page = () => {
  return (
    <div>
      <Title title="Dashboard" />
      <div className="px-2 sm:px-6">Here you can update all the details for <Link target="_blank" href={"https://www.careeratgermany.de/"} className="cursor-pointer   underline">https://www.careeratgermany.de/</Link></div>
    </div>
  );
};

export default Page;
