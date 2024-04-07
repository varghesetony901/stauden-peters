"use client";
import { LogoutButton } from "@/components/auth/logout-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidInstitution } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import { IoIosMail, IoMdPhotos } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { MdOutlineBackup, MdOutlineLogout } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

const SidebarItems = [
  {
    icon: <PiStudentFill size={21} />,
    name: "Student Services",
    link: "/dashboard/student-services",
  },
  {
    icon: <BiSolidInstitution size={21} />,
    name: "Company Services",
    link: "/dashboard/company-services",
  },
  {
    icon: <IoIosMail size={23} />,
    name: "Enquiry Mail",
    link: "/dashboard/enquiry-mail",
  },
  // {
  //   icon: <MdContactMail size={19} />,
  //   name: "Contact",
  //   link: "/dashboard/contact",
  // },
  {
    icon: <FaTags size={20} />,
    name: "Photo Tags",
    link: "/dashboard/photo-tags",
  },
  { icon: <IoMdPhotos size={20} />, name: "Photos", link: "/dashboard/photos" },
  {
    icon: <FaTags size={19} />,
    name: "Blog Tags",
    link: "/dashboard/blog-tags",
  },
  { icon: <LiaBlogSolid size={21} />, name: "Blogs", link: "/dashboard/blogs" },
  // { icon: <RiTeamLine size={20} />, name: "Team", link: "/dashboard/team" },
  {
    icon: <MdOutlineBackup size={21} />,
    name: "Backup",
    link: "/dashboard/backup",
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="h-full flex flex-col pr-2 justify-between">
        {/* mapping side bar items */}
        <div className="flex flex-col gap-2">
          {/* <div>
              <Link
                href={"/dashboard/users"}
                className={cn(
                  "flex gap-4 items-center py-2 hover:bg-gray-200 px-6 md:px-10 rounded-sm ",
                  { "bg-gray-300": pathname === "/dashboard/users" }
                )}
              >
                <FaUsers size={19} />
                <p className="hidden md:flex">Users</p>
              </Link>
            </div> */}

          {SidebarItems.map((item, index) => (
            <div key={index}>
              <div className="">
                <Link
                  href={item.link}
                  className={cn(
                    "flex gap-4 items-center py-2 hover:bg-gray-200 px-6 md:px-10 rounded-sm",
                    { "bg-gray-300": pathname === item.link }
                  )}
                >
                  {item.icon}
                  <p className="hidden md:flex">{item.name}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <LogoutButton>
          <div className="flex gap-6 items-center cursor-pointer hover:bg-gray-300 px-6 md:px-10 py-2 rounded-sm">
            <MdOutlineLogout size={20} />
            <p className="hidden md:flex">Logout</p>
          </div>
        </LogoutButton>
      </div>
    </>
  );
};

export default DashboardSidebar;
