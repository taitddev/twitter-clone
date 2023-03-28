import { useDarkMode } from "@/context/darkModeContext";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { IconType } from "react-icons";
import { BiBell, BiHomeAlt, BiLogOut, BiUser } from "react-icons/bi";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import AddPost from "../button/AddPost";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";

export interface ISidebarItem {
  id: number;
  label: string;
  icon: IconType;
  href?: string;
  auth?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

const Sidebar = () => {
  const { currentUser } = useCurrentUser();
  const { isDarkMode, changeDarkMode } = useDarkMode();

  const handleLogout = () => {
    signOut();
  };

  const items: ISidebarItem[] = [
    {
      id: 1,
      icon: BiHomeAlt,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      icon: BiBell,
      label: "Notifications",
      href: "/notifications",
      auth: true,
      alert: true,
    },
    {
      id: 3,
      icon: BiUser,
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      id: 4,
      icon: BiLogOut,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <div className="relative h-full pr-4 md:pr-6">
      <div className="sticky top-0 flex flex-col items-end">
        <div className="py-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.id} item={item}></SidebarItem>
          ))}

          <div className="p-4">
            <AddPost />
          </div>

          <div className="p-4">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={changeDarkMode}
              size={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
