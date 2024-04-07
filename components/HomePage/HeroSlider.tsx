import heroSlides from "@/heroSection.json";
import { Button } from "../ui/button";
import CarouselSlider from "./Carousel";
import Link from "next/link";

const HeroSlider = () => {
  const slidePerView = 1;
  const className = "w-screen h-screen opacity-60";
  return (
    <>
      <div className="relative">
        <div className=" bg-black w-screen ">
          <CarouselSlider
            slides={heroSlides}
            className={className}
            slidesPerView={slidePerView}
          />

          <div className=" absolute top-[30%] z-10 flex flex-col w-full items-center text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl  font-semibold mb-10 text-white">
              Welcome to <br /> Stauden Peters
            </h1>
            <div className="border text-white rounded-md px-4 py-2 opacity-90 flex justify-center items-center text-center mb-8 mx-2">
              <h5 className="text-xl font-medium ">
                Your perennial and grass producer from the Lower Rhine
              </h5>
            </div>
            <Link href={"/about"} className="mt-10">
              <Button className="w-32  font-medium   text-white">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
