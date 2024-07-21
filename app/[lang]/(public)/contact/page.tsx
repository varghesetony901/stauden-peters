import EnquiryForm from "@/components/EnquiryForm";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import Link from "next/link";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

const Page = async ({ params }: { params: { lang: Locale } }) => {
  const locale = params.lang;
  const { page } = await getDictionary(locale);
  return (
    <Wrapper>
      <MaxWidthWrapper className="pt-10 lg:pt-24 ">
        <div className="mx-auto">
          <h1 className="font-bold pb-6 lg:pb-0 text-center text-3xl">
            {page.contact.title}
          </h1>
          <div className=" lg:flex lg:items-start lg:-mx-6">
            {/* left section */}
            <div className="px-4 lg:w-1/2 lg:mx-6 flex flex-col lg:px-2 lg:py-10">
              {/* address section */}

              <div className="mt-6 space-y-8 md:mt-8 pb-4 flex flex-col">
                <div className=" flex gap-2 items-center">
                  <FaFileDownload size={20} />
                  <a
                    // href="https://tony-next-ecommerce.s3.ap-south-1.amazonaws.com/C%40G+Recruiting+UG+Brochure.pdf"
                    href="#"
                    target="_blank"
                    download
                    className="mx-2 inline-block hover:underline md:text-lg text-blue-600"
                  >
                    {page.contact.downloadLink}
                  </a>
                </div>
                <p className="flex items-center gap-2">
                  <FaLocationDot size={24} />

                  <span className="mx-2 w-72 ">
                  Drüllerweg14,  <br /> 47559, Kranenburg,<br /> Germany
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt size={20} />
                  <Link
                    href={"tel:+49 02826 91 50-0"}
                    className="flex gap-2  items-center
                  hover:text-blue-600 "
                  >
                    <p className="mx-2 truncate  dark:text-gray-400">
                    +49 02826 91 50-0
                    </p>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <IoMdMail size={22} />
                  <Link
                    href={"mailto:info@stauden-peters.de"}
                    className="inline-block gap-2  items-center hover:text-blue-600"
                  >
                    <span className="mx-2  truncate   dark:text-gray-400">
                    info@stauden-peters.de
                    </span>
                  </Link>
                </div>
              </div>

              {/* social icons */}
              <div className="mt-6 md:mt-8 ">
                <p className="text-lg font-bold underline">
                  {page.contact.follow}
                </p>

                <div className="flex gap-4 items-center mt-4 -mx-1.5">
                  <Link
                    className="mx-1.5  transition-colors duration-300 transform hover:text-blue-600"
                    href=""
                    target="_blank"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>

                  <Link
                    className="mx-1.5  transition-colors duration-300 transform hover:text-blue-600"
                    href=""
                    target="_blank"
                  >
                    <FaFacebookF size={22} />
                  </Link>

                  <Link
                    className="mx-1.5 -400 transition-colors duration-300 transform hover:text-blue-600"
                    href=""
                    target="_blank"
                  >

                    <AiFillInstagram size={24}/>
                  </Link>

                  <Link
                    className="mx-1.5 transition-colors duration-300 transform hover:text-blue-600"
                    href=""
                    target="_blank"
                  >
                    <FaYoutube size={26} />
                  </Link>
                </div>
              </div>
            </div>

            {/* yellow border */}
            <div className="mt-16 border-t w-[80%] border-yellow-300 lg:border-none  m-auto  lg:w-[1px] lg:h-96 bg-yellow-300 mx-auto"></div>

            {/* right section */}
            <div className="px-3 mt-6 lg:w-1/2 lg:px-6">
              <div className="w-full lg:px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <h1 className="text-lg font-medium px-1">
                  {page.contact.formQuery}
                </h1>

                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Page;
