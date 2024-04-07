import { LucideProps } from "lucide-react";

export const Icons = {
  logo: (props: LucideProps) => (
    <img
      src="/logo.png"
      alt="Logo"
      className="w-40 sm:w-48 xl:w-56"
    />
  ),
  smallLogo: (props: LucideProps) => (
    <img
      src="/logoSmall.jpg"
      alt="LogoSmall"
      className="w-10 "
    />
  ),
};
