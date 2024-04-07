"use client";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const Footer = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();

  let content: JSX.Element;

  if (
    pathname.startsWith(`/${locale}/auth`) ||
    pathname.startsWith(`/${locale}/dashboard`)
  ) {
    content = <></>;
  } else {
    content = (
      <>
        <footer className="">
          <div className="border-t border-yellow-300 pb-16"></div>
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {locale === "en" ? "Company" : "Firma"}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href={`/${locale}`} className="hover:underline">
                      {locale === "en" ? "Home" : "Heim "}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={`/${locale}/about`} className="hover:underline">
                      {locale === "en" ? "About" : "Über"}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href={`/${locale}/products`}
                      className="hover:underline"
                    >
                      {locale === "en" ? "Products" : "Produkte "}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href={`/${locale}/blogs`} className="hover:underline">
                      Blogs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href={`/${locale}/contact`}
                      className="hover:underline"
                    >
                      {locale === "en" ? "Contact" : "Kontakt "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {locale === "en" ? "Social" : "sozial "}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="" target="_blank" className="hover:underline">
                      LinkedIn
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="" target="_blank" className="hover:underline">
                      Youtube
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="" target="_blank" className="hover:underline">
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="" target="_blank" className="hover:underline">
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {locale === "en" ? "Legal" : "Rechtliches "}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href={`/${locale}/data-protection`}
                      target="_blank"
                      className="hover:underline"
                    >
                      {locale === "en" ? "Data protection" : "Datenschutz "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-4 py-6 text-center flex flex-col  sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-20">
              <div className="flex justify-center items-center space-x-5 rtl:space-x-reverse">
                <Link
                  className="mx-1.5  hover:text-blue-600"
                  href=""
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </Link>

                <Link
                  className="mx-1.5  hover:text-blue-600"
                  href=""
                  target="_blank"
                >
                  <FaFacebookF size={18} />
                </Link>

                <Link
                  className="mx-1.5  hover:text-blue-600"
                  href=""
                  target="_blank"
                >
                 <AiFillInstagram size={21}/>
                </Link>

                <Link
                  className="mx-1.5 hover:text-blue-600"
                  href=""
                  target="_blank"
                >
                  <FaYoutube size={22} />
                </Link>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center mb-10">
              © 2024 Stauden Peters.{" "}
              {locale === "en"
                ? "All Rights Reserved."
                : "Alle Rechte vorbehalten. "}
            </p>
          </div>
        </footer>
      </>
    );
  }

  return content;
};

export default Footer;
