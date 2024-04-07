const Features = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="absolute bg-white w-screen h-full">
        <img
          className="absolute w-full h-full object-cover object-top opacity-100 overflow-hidden"
          src="/image3.jpg"
          alt="photo"
        />
      </div>

      <div className="py-12 sm:py-24 flex gap-6 flex-col lg:flex-row px-6 xl:px-16">
        {/* left section */}
        <div className="relative lg:w-[200px] xl:w-[230px] text-white flex flex-col">
          <p className="mb-2 font-semibold ">About Our Features</p>
          <h1 className="text-4xl font-bold mb-6 leading-normal">
            Providing Your Green Heaven
          </h1>
          <p className="mb-6">
            Vestibulum ullamcorper sed quia consequuntur magni dolores. Aenean
            id libero.
          </p>
        </div>

        {/* right section */}
        <div className="relative flex gap-6 justify-center flex-col md:flex-row lg:min-h-full">
          <div
            className="relative w-full group md:w-[220px] xl:w-[250px] h-fit
           bg-white flex flex-col gap-2 p-6 pb-2 hover:pb-12  text-black rounded-lg transition-all ease-linear duration-300 hover:bg-slate-700 hover:text-white shadow-lg"
          >
            <h1 className="relative text-2xl font-semibold mb-4">
              Crops Advanced Analysis
            </h1>

            <div className="relative w-[150px] after:content-[''] after:absolute after:block after:rounded-md after:group-hover:rounded-none after:bottom-4 after:left-[55px] after:group-hover:scale-x-[4] after:w-10 after:h-1 after:bg-white transition-all ease-in after:duration-300 overflow-hidden">
              <img
                className=" w-[150px] h-[100px] mb-4 rounded-md
          "
                src="/featureBox1.jpg"
                alt=""
              />
            </div>

            <p className="mb-2 ">
              Donec tristique orci viverra, ultrices risus maximus, porttitor
              velit.
            </p>

            <p className=" text-sm  after:text-base after:text-white cursor-pointer after:absolute   after:content-['View_Details_->'] after:bottom-5 after:group-hover:bottom-5 after:transition after:opacity-0 after:group-hover:opacity-100 after:duration-200 after:ease-linear after:hover:translate-x-1"></p>
          </div>

          <div
            className="relative group md:w-[220px] xl:w-[250px] h-fit
           bg-white flex flex-col gap-2 p-6 pb-8  text-black rounded-lg transition-all ease-linear duration-300 hover:bg-slate-700 hover:text-white shadow-lg"
          >
            <h1 className="relative text-2xl font-semibold mb-4">
              Crops Advanced Analysis
            </h1>

            <div className="relative w-[150px] after:content-[''] after:absolute after:block after:rounded-md after:group-hover:rounded-none after:bottom-4 after:left-[55px] after:group-hover:scale-x-[4] after:w-10 after:h-1 after:bg-white transition-all ease-in after:duration-300 overflow-hidden">
              <img
                className=" w-[150px] h-[100px] mb-4 rounded-md
          "
                src="/featureBox2.jpg"
                alt=""
              />
            </div>

            <p className="mb-2">
              Donec tristique orci viverra, ultrices risus maximus, porttitor
              velit.
            </p>


            <p className="font-semibold cursor-pointer hover:translate-x-1 duration-200 transition-all ease-linear">View Details -&gt;</p>
          </div>

          <div
            className="relative group md:w-[220px] xl:w-[250px] h-fit
           bg-white flex flex-col gap-2 p-6 pb-2 hover:pb-12   text-black rounded-lg transition-all ease-linear duration-300 hover:bg-slate-700 hover:text-white shadow-lg"
          >
            <h1 className="relative text-2xl font-semibold mb-4">
              Crops Advanced Analysis
            </h1>

            <div className="relative w-[150px] after:content-[''] after:absolute after:block after:rounded-md after:group-hover:rounded-none after:bottom-4 after:left-[55px] after:group-hover:scale-x-[4] after:w-10 after:h-1 after:bg-white transition-all ease-in after:duration-300 overflow-hidden">
              <img
                className=" w-[150px] h-[100px] mb-4 rounded-md
          "
                src="/featureBox3.jpg"
                alt=""
              />
            </div>

            <p className="mb-2">
              Donec tristique orci viverra, ultrices risus maximus, porttitor
              velit.
            </p>

            <p className=" text-sm   after:text-base after:text-white cursor-pointer after:absolute   after:content-['View_Details_->'] after:bottom-5 after:group-hover:bottom-5 after:transition after:opacity-0 after:group-hover:opacity-100 after:duration-200 after:ease-linear after:hover:translate-x-1"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
