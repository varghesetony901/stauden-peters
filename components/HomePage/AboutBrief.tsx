import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { Button } from "../ui/button";

const AboutBrief = () => {
  return (
    <>
      <MaxWidthWrapper className="grid grid-cols-1 lg:grid-cols-5  gap-6">
        {/* left side */}
        <div className="lg:col-span-3 flex flex-col">
          <p className="mb-2 font-semibold text-blue-900 ">About Our Program</p>
          <h1 className="text-3xl font-semibold mb-2 ">
            Connecting With Nature
          </h1>
          <p className="flex-wrap text-gray-500 text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, saperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo ipsa quae ab illo inventore
            veritatis et quasi saperiam, et quasi architecto beatae vitae.
          </p>
          <br />
          <p className="hidden lg:flex flex-wrap text-gray-500 text-base leading-7 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, saperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo ipsa quae ab illo inventore
            veritatis et quasi saperiam, et quasi architecto beatae vitae.
          </p>
          <div className="flex gap-4 items-center  ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                fill="#4169e1"
                className="bi bi-award"
                viewBox="0 0 16 16"
              >
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 mt-4 mb-4">
              <p className="text-xl mt-4">
                Top Award at International <br />
                Gardening 2020
              </p>

              <p className="flex-wrap text-gray-500 text-base leading-7">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <Button className="hidden lg:flex w-48 btn-primary mt-4">
            Read More
          </Button>
        </div>

        {/* right side */}
        <div className="lg:col-span-2 flex flex-col sm:flex-row justify-center gap-6">
          <img
            className="w-full sm:max-w-96 lg:max-w-full max-h-96  rounded-xl object-cover"
            src="/connectNature.jpg"
            alt="photo"
          />

          <div>
            <p className="lg:hidden flex text-gray-500 text-base leading-7 max-w-">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              saperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo ipsa quae ab illo
              inventore veritatis et quasi saperiam, et quasi architecto beatae
              vitae.
            </p>
            <Button className=" lg:hidden flex w-48 btn-primary mt-4">
              Read More
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default AboutBrief;
