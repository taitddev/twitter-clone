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
    <div className="h-screen bg-lightSecondary text-darkPrimary dark:bg-darkPrimary dark:text-lightPrimary">
      {!currentUser ? (
        <Container />
      ) : (
        <>
          <MetaData title="Home" />
          <main className="xl:px-30 max-w-7xlxl container mx-auto h-full">
            <div className="grid h-full grid-cols-4">
              <Sidebar />
              <div className="border-light col-span-3 border-x-[1px] lg:col-span-2">
                {children}
              </div>
              <FollowBar />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Layout;
