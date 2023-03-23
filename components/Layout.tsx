import React, { ReactNode } from "react";
import FollowBar from "./FollowBar";
import Sidebar from "./layout/Sidebar";
import MetaData from "./MetaData";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <MetaData title="Home" />
      <main className="grid h-full grid-cols-4">
        <Sidebar />
        <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2">
          {children}
        </div>
        <FollowBar />
      </main>
    </div>
  );
};

export default Layout;
