import React from "react";
import ToTopButton from "./ToTopButton";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="border-t border-yellow-300 pb-16"></div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/" className=" hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a href="/blogs" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Social
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href="https://www.linkedin.com/in/career-at-germany-74a842214"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.youtube.com/@careeratgermany8971"
                  target="_blank"
                  className="hover:underline"
                >
                  Youtube
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.facebook.com/careeratgermany"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.instagram.com/careeratgermany"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href="/data-protection"
                  target="_blank"
                  className="hover:underline"
                >
                  Data protection
                </Link>
              </li>
              {/* <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* <div className=" sm:rounded-full sm:w-[30%] m-auto border-t border-yellow-300"></div> */}

        <div className="px-4 py-6 text-center flex flex-col  sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-20">
          <div className="flex justify-center items-center space-x-5 rtl:space-x-reverse">
            <Link
              className="mx-1.5  transition-colors duration-300 transform hover:text-red-700"
              href="https://www.linkedin.com/in/career-at-germany-74a842214/"
              target="_blank"
            >
              <FaLinkedinIn size={20} />
            </Link>

            <Link
              className="mx-1.5  transition-colors duration-300 transform hover:text-red-700"
              href="https://www.facebook.com/careeratgermany"
              target="_blank"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              className="mx-1.5 -400 transition-colors duration-300 transform hover:text-red-700"
              href="https://www.instagram.com/careeratgermany/"
              target="_blank"
            >
              <FaInstagram size={20} />
            </Link>

            <Link
              className="mx-1.5 transition-colors duration-300 transform hover:text-red-700"
              href="https://www.youtube.com/@careeratgermany8971"
              target="_blank"
            >
              <FaYoutube size={22} />
            </Link>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 C@G Recruting UG. All Rights Reserved.
          </span>
        </div>

        {/* move to top button */}
        <ToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
