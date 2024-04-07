"use client";
import { useState } from "react";

import VideoModal from "./VideoModal";
import { IoPlayOutline } from "react-icons/io5";

const VideoSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(false);
  };
  return (
    <div className=" flex flex-col justify-center items-center gap-10 px-6 z-30">
      <div className=" flex flex-col max-w-7xl">
        <p className="mb-4 font-semibold text-blue-900">Reaching Out To You</p>
        <h1 className="text-2xl font-semibold mb-6">
          Adaptability And Success
        </h1>
        <p className=" text-gray-500 text-base leading-7">
          Phasellus justo urna, rhoncus eget commodo aliquam, vestibulum eget
          ex. Donec tristique orci viverra, ultrices risus maximus, porttitor
          velit. Nunc dignissim bibendum dignissim.
        </p>
        <div className="flex flex-col sm:flex-row mt-10 gap-6 justify-center items-center sm:items-start flex-wrap">
          <div className="p-4 shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl hover:scale-[102%] duration-200 max-w-80">
            <img src="/icon-connect.png" alt="icon-connect" />
            <h1 className="text-xl font-semibold mt-3 mb-2">
              Providing Information
            </h1>
            <p className="flex-wrap text-gray-500 text-base leading-7">
              Lorem ipsum dolor sit amet, consectetur laudantium.
            </p>
          </div>
          <div className=" p-4 shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl hover:scale-[102%] duration-200 max-w-80">
            <img src="/icon-monitor.png" alt="icon-monitor" />
            <h1 className="text-xl font-semibold mt-3 mb-2">
              Providing Information
            </h1>
            <p className="flex-wrap text-gray-500 text-base leading-7">
              Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aperiam, ea culpa, accusamus et
              neque enim debitis inventore, modi consequatur amet laborum sequi
              aut dolores nostrum numquam ipsa architecto suscipit laudantium.
            </p>
          </div>
          <div className=" p-4 shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl hover:scale-[102%] duration-200 max-w-80 w-full">
            <img src="/icon-thumbs-up.png" alt="icon-thumbs-up" />
            <h1 className="text-xl font-semibold mt-3 mb-2">
              Providing Information
            </h1>
            <p className="flex-wrap text-gray-500 text-base leading-7">
              Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aperiam, ea culpa, accusamus et
              neque enim debitis inventore,
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-w-[350px] max-w-[700px] flex justify-center  overflow-hidden ">
        <img className=" rounded-2xl" src="/image1.jpg" alt="" />
        <div
          onClick={() => setOpenModal(true)}
          className="absolute top-[40%] bg-blue-600 rounded-full w-20 h-20 justify-center items-center flex cursor-pointer"
        >
          <div className="absolute bg-blue-600 w-20 h-20 rounded-full animate-ping"></div>
          <div className="flex justify-center items-center">
            <IoPlayOutline size={26} color ={"white"} strokeWidth = {2}/>
          </div>
        </div>
        <VideoModal open={openModal} onClose={handleClick} />
      </div>
    </div>
  );
};

export default VideoSection;
