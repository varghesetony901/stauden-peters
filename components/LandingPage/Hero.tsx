import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = async ({locale}:{locale : Locale}) => {

  const {page} = await getDictionary(locale)
  return (
    <div 
    className="absolute w-full  top-0  2xl:-top-28 bg-[url('https://career-at-germany-de.s3.ap-south-1.amazonaws.com/static+images/hero-bg-xl.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center mt-48 lg:flex-row lg:justify-between gap-10 lg:gap-6 px-4 lg:px-20 xl:px-28 2xl:px-36 lg:mt-40 2xl:mt-56 lg:mb-24 xl:mb-12">
        <div className="flex flex-col items-center  lg:items-start gap-6 lg:mt-16 xl:mt-10 2xl:mt-24">
          <div className="bg-black  px-4 text-center py-3  rounded-md">
            <h2 className="text-white text-sm 2xl:text-base font-semibold tracking-wide">
              {/* Beyond Hiring, Building Teams */}
              {page.home.hero.tagLine1}
            </h2>
          </div>

          <div className="text-white flex flex-col gap-2">
            <h2 className=" sm:text-2xl font-semibold 2xl:font-bold tracking-wide text-center lg:text-start">
            {page.home.hero.tagLine2}
            </h2>
            <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-wide text-center lg:text-start">
            {page.home.hero.tagLine3}
            </h1>
          </div>

          <div className="2xl:pt-2">
            <p className="text-white sm:xl:text-lg tracking-wide text-center lg:text-start ">
            {page.home.hero.tagLine4}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-10 lg:mt-0 2xl:mt-4  justify-center lg:justify-start">
            <Link href={`${locale}/services`}>
              <Button className="bg-black w-36 hover:bg-yellow-300 hover:text-black shadow-xl">
              {page.home.hero.button1}
              </Button>
            </Link>
            <Link href={`${locale}/contact`} >
              <Button className="bg-white text-black w-36 hover:bg-yellow-300 shadow-xl">
              {page.home.hero.button2}
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center 2xl:mt-10">
          <img
            src="https://career-at-germany-de.s3.ap-south-1.amazonaws.com/static+images/hero-pic.png"
            alt=""
            className="w-[400px]  lg:w-[350px] xl:w-[450px] 2xl:w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
