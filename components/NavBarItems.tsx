"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { Locale } from "@/i18n.config";
import LocaleSwitcher from "./LocaleSwitcher";

const NavBarItems = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const params = useSearchParams();

  const MenuItemsEn = [
    { name: "home", link: `/${locale}` },
    { name: "about", link: `/${locale}/about` },
    { name: "products", link: `/${locale}/products` },
    { name: "blogs", link: `/${locale}/blogs` },
    { name: "contact", link: `/${locale}/contact` },
    // { name: "gallery", link: `/${locale}/gallery` },
  ];
  const MenuItemsDe = [
    { name: "heim", link: `/${locale}` },
    { name: "über", link: `/${locale}/about` },
    { name: "Produkte", link: `/${locale}/products` },
    { name: "blogs", link: `/${locale}/blogs` },
    { name: "kontakt", link: `/${locale}/contact` },
    // { name: "Galerie", link: `/${locale}/gallery` },
  ];

  let content: JSX.Element;

  if (
    pathname.startsWith(`/${locale}/auth`) ||
    pathname.startsWith(`/${locale}/dashboard`)
  ) {
    content = <></>;
  } else {
    content = (
      <nav>
        <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between ">
          <div>
            <Link href={`/${locale}`}>
              <Icons.logo />
            </Link>
            {/* <Link href={`/${locale}`} className="sm:hidden">
              <Icons.smallLogo />
            </Link> */}
          </div>

          {/* Menu items */}
          <div className="lg:flex divide-x hidden ">
            {locale === "en"
              ? MenuItemsEn.map((menu) => (
                  <Link
                    href={menu.link}
                    key={menu.name}
                    className={cn(
                      "px-5 font-semibold hover:text-blue-600 capitalize",
                      {
                        "text-blue-600":
                          pathname.includes(menu.name) ||
                          pathname === menu.link,
                      }
                    )}
                  >
                    {menu.name}
                  </Link>
                ))
              : MenuItemsDe.map((menu) => (
                  <Link
                    href={menu.link}
                    key={menu.name}
                    className={cn(
                      "px-5 font-semibold hover:text-blue-600 capitalize",
                      { "text-blue-600": pathname.includes(menu.name) ||
                      pathname === menu.link, }
                    )}
                  >
                    {menu.name}
                  </Link>
                ))}
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="hidden lg:flex">
              <LocaleSwitcher />
            </div>
            <div className="lg:hidden ">
              <MobileNav locale={locale} />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return content;
};

export default NavBarItems;
