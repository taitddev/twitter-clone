import { useCallback } from "react";
import { BsDot } from "react-icons/bs";
import { ISidebarItem } from "./Sidebar";

interface ISidebarItemProps {
  item: ISidebarItem;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({ item }) => {
  const { label, icon: Icon, alert, onClick } = item;

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
  }, []);

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
    </div>
  );
};

export default SidebarItem;
