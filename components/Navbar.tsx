import { Locale } from "@/i18n.config";
import NavBarItems from "./NavBarItems";

const Navbar = async ({locale} : {locale : Locale}) => {

  return (
    <nav className="sticky z-40 top-0 lg:top-12 inset-x-0 lg:px-6 ">
      <header className="bg-white lg:max-w-[95%] xl:max-w-[90%] mx-auto lg:rounded-xl px-6 lg:px-10 shadow-lg relative">
        <div className="">
          <NavBarItems locale={locale}/>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
