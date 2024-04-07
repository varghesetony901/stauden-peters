import React from "react";

const Title = ({ title }: { title: string }) => {
  return <div className="px-2 sm:px-6 pb-3 md:pb-4 text-2xl font-semibold">{title}</div>;
};

export default Title;
