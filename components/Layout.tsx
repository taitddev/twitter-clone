import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import FollowBar from "./FollowBar";
import Sidebar from "./layout/Sidebar";
import MetaData from "./MetaData";
import Container from "./form/Container";
import { useRouter } from "next/router";
import Header from "./Header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <div className="h-full bg-lightSecondary text-darkPrimary dark:bg-darkPrimary dark:text-lightPrimary">
      {!session ? (
        <Container />
      ) : (
        <>
          <MetaData title="Home" />
          <Header />
          <main className="container mx-auto h-full max-w-7xl">
            <div className="grid h-full grid-cols-4">
              <Sidebar />
              <div className="relative col-span-3 mt-28 lg:col-span-2">
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
