import { useDarkMode } from "@/context/darkModeContext";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  BiBell,
  BiCog,
  BiGroup,
  BiHomeAlt,
  BiLogOut,
  BiUser,
} from "react-icons/bi";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Avatar from "../Avatar";

import AddPost from "../button/AddPost";
import SidebarItem from "./SidebarItem";

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

  const handleLogout = () => {
    signOut();
  };

  const items: ISidebarItem[] = [
    {
      id: 1,
      icon: BiHomeAlt,
      label: "Trang chủ",
      href: "/",
    },
    {
      id: 2,
      icon: BiBell,
      label: "Thông báo",
      href: "/notifications",
      auth: true,
      alert: true,
    },
    {
      id: 3,
      icon: BiGroup,
      label: "Bạn bè",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      id: 4,
      icon: BiUser,
      label: "Hồ sơ",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      id: 5,
      icon: BiCog,
      label: "Cài đặt",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      id: 6,
      icon: BiLogOut,
      label: "Đăng xuất",
      onClick: handleLogout,
    },
  ];

  const [selectedItem, setSeletedItem] = useState<ISidebarItem>(items[0]);

  return (
    <div className="relative h-full px-6">
      <div className="sticky top-28 z-20 flex w-full flex-col gap-8">
        <div className="flex items-center gap-4 rounded-xl bg-lightPrimary p-4 py-4 dark:bg-darkSecondary">
          <Avatar userId={currentUser?.id} />
          <div className="flex flex-col">
            <span className="font-semibold">{currentUser?.name}</span>
            <span className="text-neutral-500">@{currentUser?.username}</span>
          </div>
        </div>

        <div className="divide-y divide-gray-100 rounded-xl bg-lightPrimary py-4 dark:bg-darkSecondary">
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              selectedItem={selectedItem}
              setSelectedItem={setSeletedItem}
            ></SidebarItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
