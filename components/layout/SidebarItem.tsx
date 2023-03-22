import { BsDot } from "react-icons/bs";
import { ISidebarItem } from "./Sidebar";

interface ISidebarItemProps {
  item: ISidebarItem;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({ item }) => {
  const { label, icon: Icon, alert } = item;

  const handleClick = () => {};

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-2 rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10"
    >
      <div className="relative">
        <Icon size={24} color="white" />
        {alert ? (
          <div className="absolute right-0 top-0 h-3 w-3 -translate-y-2/4 rounded-full bg-sky-500"></div>
        ) : null}
      </div>

      <p className="hidden text-xl text-white lg:block">{label}</p>
      {/* <div
        className="
      relative
      flex 
      h-14
      w-14
      cursor-pointer
      items-center
      justify-center 
      rounded-full
      p-4 
      hover:bg-slate-300 
      hover:bg-opacity-10 
      lg:hidden
    "
      >
        <Icon size={28} color="white" />
        {alert ? (
          <BsDot className="absolute -top-4 left-0 text-sky-500" size={70} />
        ) : null}
      </div> */}
      {/* <div
        className="
      items-row
      relative 
      hidden 
      cursor-pointer 
      items-center 
      gap-4 
      rounded-full 
      p-4 
      hover:bg-slate-300 
      hover:bg-opacity-10
      lg:flex
    "
      >
        <Icon size={24} color="white" />
        <p className="hidden text-xl text-white lg:block">{label}</p>
        {alert ? (
          <BsDot className="absolute -top-4 left-0 text-sky-500" size={70} />
        ) : null}
      </div> */}
    </div>
  );
};

export default SidebarItem;
