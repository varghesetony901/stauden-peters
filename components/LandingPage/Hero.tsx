import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="absolute w-full  top-0  2xl:-top-28 bg-[url('/hero-bg-xl.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center mt-48 lg:flex-row lg:justify-between gap-10 lg:gap-6 px-4 lg:px-20 xl:px-28 2xl:px-36 lg:mt-40 2xl:mt-56 lg:mb-24 xl:mb-12">
        <div className="flex flex-col items-center  lg:items-start gap-6 lg:mt-16 xl:mt-10 2xl:mt-24">
          <div className="bg-black w-60 2xl:w-72 px-4 text-center py-3  rounded-md">
            <h2 className="text-white text-sm 2xl:text-base font-semibold tracking-wide">
              Beyond Hiring, Building Teams
            </h2>
          </div>

          <div className="text-white flex flex-col gap-2">
            <h2 className=" sm:text-2xl font-semibold 2xl:font-bold tracking-wide text-center lg:text-start">
              Connecting Talent to Opportunity :
            </h2>
            <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-wide text-center lg:text-start">
              Your Success, Our Expertise!
            </h1>
          </div>

          <div className="2xl:pt-2">
            <p className="text-white sm:xl:text-lg tracking-wide text-center lg:text-start ">
              Your trusted partner in recruiting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-10 lg:mt-0 2xl:mt-4  justify-center lg:justify-start">
            <Link href={"/services"}>
              <Button className="bg-black w-36 hover:bg-yellow-300 hover:text-black shadow-xl">
                Get Started
              </Button>
            </Link>
            <Link href={"/contact"} >
              <Button className="bg-white text-black w-36 hover:bg-yellow-300 shadow-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center 2xl:mt-10">
          <img
            src="/hero-pic.png"
            alt=""
            className="w-[400px]  lg:w-[350px] xl:w-[450px] 2xl:w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
