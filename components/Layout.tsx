import useCurrentUser from "@/hooks/useCurrentUser";
import React, { ReactNode } from "react";
import FollowBar from "./FollowBar";
import Sidebar from "./layout/Sidebar";
import MetaData from "./MetaData";
import Container from "./form/Container";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { currentUser } = useCurrentUser();

  return (
    <div className="h-screen">
      {currentUser ? (
        <>
          <MetaData title="Home" />
          <main className="grid h-full grid-cols-4">
            <Sidebar />
            <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2">
              {children}
            </div>
            <FollowBar />
          </main>
        </>
      ) : (
        <Container />
      )}
    </div>
  );
};

export default Layout;
