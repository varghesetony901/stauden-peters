import React, { SetStateAction } from "react";

const VideoModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;

  return (
    <div className=" fixed h-screen w-full bg-black bg-opacity-80 backdrop-blur-sm top-0 left-0 z-30 overscroll-y-none">
      <div className="p-4 relative top-[30%] md:w-[725px] md:h-[400px] w-full h-[350px]  m-auto  ">
        <iframe
          className="relative w-full h-full rounded-xl "
          src="https://www.youtube.com/embed/5clOYWsNhhk?si=WMHSGYGSkX5IOQwx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 absolute -top-5 right-4 text-white cursor-pointer"
          onClick={onClose}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default VideoModal;
