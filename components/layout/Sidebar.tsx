import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const items = [
  {
    icon: BsHouseFill,
    label: "Home",
    href: "/",
  },
  {
    icon: BsBellFill,
    label: "Notifications",
    href: "/notifications",
    auth: true,
    // alert: currentUser?.hasNotification,
  },
  {
    icon: FaUser,
    label: "Profile",
    // href: `/users/${currentUser?.id}`,
    auth: true,
  },
];

const Sidebar = () => {
  return <div className="h-full pr-4 md:pr-6">Sidebar</div>;
};

export default Sidebar;
