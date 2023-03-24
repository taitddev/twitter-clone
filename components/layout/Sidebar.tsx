import useCurrentUser from "@/hooks/useCurrentUser";
import { IconType } from "react-icons";
import { BiBell, BiHomeAlt, BiLogOut, BiUser } from "react-icons/bi";
import { FiFeather } from "react-icons/fi";
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

  const handleLogout = () => {};

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
      href: `/users/123`,
      auth: true,
    },
    {
      id: 4,
      icon: BiLogOut,
      label: "Logout",
      href: `/users/${currentUser?.id}`,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="py-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.id} item={item}></SidebarItem>
          ))}

          <div className="p-4">
            <AddPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
