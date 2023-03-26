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
  const { currentUser, isLoading } = useCurrentUser();

  if (isLoading) return null;

  return (
    <div className="h-screen">
      {!currentUser ? (
        <Container />
      ) : (
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
      )}
    </div>
  );
};

export default Layout;
