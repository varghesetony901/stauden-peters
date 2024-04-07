import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopSection = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 hidden z-40 fixed lg:flex 2xl:px-64 xl:px-36 md:px-8 lg:px-16 text-sm justify-between h-16 md:h-24 w-full">
      {/* left side */}
      <div className="hidden md:flex gap-6">
        <Link href={"mailto:info@stauden-peters.de"}>
          <div className="flex justify-center items-center gap-1 h-14 text-white">
            <Mail size={16} />
            <p> info@stauden-peters.de</p>
          </div>
        </Link>
        <Link href={""}>
          <div className="flex items-center gap-1 h-14 text-white">
            <MapPin size={18} />

            <p>Drüllerweg14 47559 Kranenburg</p>
          </div>
        </Link>

        <Link href={"tel:+49 02826 91 50-0"}>
          <div className="flex items-center gap-1 h-14 text-white">
            <Phone size={16} />

            <p>+49 02826 91 50-0</p>
          </div>
        </Link>
      </div>

      {/* right side */}
      <div className="hidden md:flex gap-4  justify-center items-center h-14 text-white ">
        <Link href={""}>
          <FaFacebook size={18} />
        </Link>

        <Link href={""}>
          <FaInstagram size={18} />
        </Link>

        <Link href={""}>
          <FaXTwitter size={18} />
        </Link>
      </div>
    </div>
  );
};

export default TopSection;
