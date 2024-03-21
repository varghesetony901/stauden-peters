'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Icons } from './Icons';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';



const NavBarItems = () => {
    const pathname = usePathname();
    // console.log(user);
    
    const MenuItems = [
        { name: "home", link: "/" },
        { name: "services", link: "/services" },
        { name: "blog", link: "/blogs" },
        { name: "contact", link: "/contact" },
        { name: "gallery", link: "/gallery" },
      ];
  return (
    <div>

<div className="flex h-16 sm:h-20 items-center justify-between ">
            <div className="">
              <Link href="/">
                <Icons.logo />
              </Link>
            </div>

            {/* Menu items */}
            <div className="lg:flex divide-x hidden ">
              {!pathname.includes("admin") &&
                MenuItems.map((menu) => (
                  <Link
                    href={menu.link}
                    key={menu.name}
                    className={cn(
                      "px-5 font-semibold hover:text-red-600 capitalize",
                      { "text-red-700": pathname.includes(menu.name) }
                    )}
                  >
                    {menu.name}
                  </Link>
                ))}
            </div>

            {!pathname.includes("admin") && (
              <div className="lg:hidden ">
                <MobileNav />
              </div>
            )}

            {!pathname.includes("admin") && (
              <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-5">
                <Link
                  href="/data-protection"
                  className=" p-1 px-2.5 hover:bg-slate-100 hover:text-black rounded-md border border-gray-400"
                >
                  Data protection
                </Link>
              </div>
            )}

          
          </div>
    </div>
  )
}

export default NavBarItems