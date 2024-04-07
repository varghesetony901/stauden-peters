"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MissionVision = () => {
  const activeClass =
    "flex flex-col gap-4 items-center justify-center w-full h-40 transition duration-300 ease-in";
  const updatedClass = activeClass + " bg-blue-700 text-white";

  const [div1, setDiv1] = useState(updatedClass);
  const [div2, setDiv2] = useState(activeClass);

  const handleChange1 = () => {
    setDiv1(updatedClass);
    setDiv2(activeClass);
  };
  const handleChange2 = () => {
    setDiv1(activeClass);
    setDiv2(updatedClass);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 ">
      <div className="text-center">
        <p className="mb-4 font-semibold text-blue-700">Everything You Need</p>
        <h1 className="text-2xl font-semibold mb-10 leading-snug">
          We Provide All The Services <br /> You Need To Grow
        </h1>
      </div>
      <div className="flex flex-col justify-center lg:flex-row  gap-10">
        <div className="flex lg:max-w-lg flex-col gap-6">
          <p className="text-gray-500">
            Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt neque porro
            quisquam est.
            <br />
            <br />
            “Lorem ipsum dolor sit amet, consectetur adipisicing elit, saperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta beatae vitae dicta.”
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-10 ">
            <div className="h-64 rounded-md sm:w-36 sm:h-36 overflow-hidden sm:rounded-full">
              <img
                className="w-full h-full sm:rounded-full hover:scale-[102%] duration-300 object-cover transition-all"
                src="/founder.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <h2 className="text-2xl font-bold ">Peters</h2>
              <p className="text-blue-600 font-medium">Company Founder</p>
            </div>
          </div>
        </div>

        <div className="max-w-[600px] flex m-auto flex-col gap-2  shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)] rounded-3xl">
          <div className="relative flex justify-between">
            <div onClick={handleChange1} className={`${div1}  rounded-tl-3xl`}>
              <img className="w-12" src="/mission.png" alt="" />
              <h4 className="text-lg font-semibold">Mission</h4>
            </div>
            <div onClick={handleChange2} className={`${div2}  rounded-tr-3xl`}>
              <img className="w-12" src="/mission.png" alt="" />
              <h4 className="text-lg font-semibold">Vision</h4>
            </div>

            <hr className="absolute bottom-0 w-full" />
          </div>

          {div1 === updatedClass ? (
            <div className="p-8 text-gray-500">
              Mission sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem.
            </div>
          ) : (
            <div className="p-8 text-gray-500">
              Vision sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
