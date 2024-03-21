import { cookies } from "next/headers";
import NavBarItems from "./NavBarItems";
import { currentUser } from "@/lib/auth";

const Navbar = async () => {
  // const pathname = usePathname();
  // const MenuItems = [
  //   { name: "home", link: "/" },
  //   { name: "services", link: "/services" },
  //   { name: "blog", link: "/blogs" },
  //   { name: "contact", link: "/contact" },
  //   { name: "gallery", link: "/gallery" },
  // ];
  const nextCookies = cookies();
  const user = await currentUser();

  return (
    <div className="sticky z-40 top-0 inset-x-0 lg:px-6">
      <header className="bg-white lg:max-w-[95%] xl:max-w-[90%] mx-auto lg:rounded-b-xl px-6 lg:px-10 shadow-lg relative">
        <div className="">
          <NavBarItems />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
