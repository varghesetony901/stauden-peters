import React from "react";

const AboutDesc = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center  md:text-3xl  mb-6">
          About Us
        </h2>
      </div>
      <section className="flex items-center ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className=" flex gap-4 flex-col md:flex-row">
            <div className="w-full px-4 md:w-1/2 lg:mb-0">
              <img
                src="/about-us.jpg"
                alt=""
                className="relative object-cover w-full h-96 rounded-3xl"
              />
            </div>
            <div className="w-full px-4 md:w-1/2 lg:mb-0 ">
              <p className=" md:mb-0 text-base leading-7 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniamLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDesc;
