import React from "react";

const Team = () => {
  return (
    <div>
      <section className="flex items-center pt-4 font-poppins ">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-600 uppercase dark:text-gray-400">
              Team
            </span>
            <h1 className="text-2xl font-bold capitalize dark:text-white">
              {" "}
              Our Perfect Team{" "}
            </h1>
          </div>

          {/* team Photos */}

          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col flex-wrap mb-0 overflow-hidden rounded  items-center sm:items-start">
              <div className=" mb-3 overflow-hidden text-xs text-white rounded-full w-32 h-32 flex justify-center items-center ">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-[102%] duration-300"
                  src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg"
                  alt=""
                />
              </div>
              <div className="relative flex self-center flex-1 lg:ml-8 ">
                <div className="flex flex-col items-center sm:items-start">
                  <h2 className="mb-2 text-2xl font-bold dark:text-gray-300">
                    John Doe
                  </h2>
                  <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Director
                  </p>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="flex"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap mb-0 overflow-hidden rounded  items-center sm:items-start">
              <div className=" mb-3 overflow-hidden text-xs text-white rounded-full w-32 h-32 flex justify-center items-center ">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-[102%] duration-300"
                  src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg"
                  alt=""
                />
              </div>
              <div className="relative flex self-center flex-1 lg:ml-8 ">
                <div className="flex flex-col items-center sm:items-start">
                  <h2 className="mb-2 text-2xl font-bold dark:text-gray-300">
                    John Doe
                  </h2>
                  <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Director
                  </p>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="flex"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap mb-0 overflow-hidden rounded  items-center sm:items-start">
              <div className=" mb-3 overflow-hidden text-xs text-white rounded-full w-32 h-32 flex justify-center items-center ">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-[102%] duration-300"
                  src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg"
                  alt=""
                />
              </div>
              <div className="relative flex self-center flex-1 lg:ml-8 ">
                <div className="flex flex-col items-center sm:items-start">
                  <h2 className="mb-2 text-2xl font-bold dark:text-gray-300">
                    John Doe
                  </h2>
                  <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Director
                  </p>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetu incididunt ut dolore
                    magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="flex"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
