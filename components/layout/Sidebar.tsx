import { IconType } from "react-icons";
import { BiBell, BiHomeAlt, BiLogOut, BiUser } from "react-icons/bi";
import { FiFeather } from "react-icons/fi";
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
      href: `/users/123`,
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
            <button className="flex items-center justify-center gap-2 rounded-full bg-sky-500 p-4">
              <FiFeather size={20} />
              <span className="hidden font-semibold lg:block">New post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
