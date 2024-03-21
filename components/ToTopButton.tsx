'use client'
import { ArrowUpToLine } from "lucide-react";
import React from "react";


const ToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <div className="flex m-auto rounded-full justify-center items-center  w-10   h-10 mb-4 bg-yellow-400 cursor-pointer "
    onClick={scrollToTop}>
    
      <ArrowUpToLine  size={18} className="animate-pulse"/>
    </div>
  );
};

export default ToTopButton;
