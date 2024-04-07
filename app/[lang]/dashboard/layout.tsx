import DashboardSidebar from "./_components/DashboardSidebar";
import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-screen flex flex-col ">
      <Navbar />
      <div className="flex h-full">
        <div className=" h-full overflow-y-auto border-r pt-28 pb-10 ">
          <DashboardSidebar />
        </div>
        <div className="py-28 overflow-x-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
