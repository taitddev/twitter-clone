import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import FollowBar from "./FollowBar";
import Sidebar from "./layout/Sidebar";
import MetaData from "./MetaData";
import Container from "./form/Container";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className="h-screen bg-lightSecondary text-darkPrimary dark:bg-darkPrimary dark:text-lightPrimary">
      {!session ? (
        <Container />
      ) : (
        <>
          <MetaData title="Home" />
          <main className="container mx-auto h-full xl:max-w-[1600px]">
            <div className="grid h-full grid-cols-4">
              <Sidebar />
              <div className="border-light relative col-span-3 border-x-[1px] lg:col-span-2">
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
