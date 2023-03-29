import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useCallback } from "react";
import { ISidebarItem } from "./Sidebar";

interface ISidebarItemProps {
  item: ISidebarItem;
  selectedItem: ISidebarItem;
  setSelectedItem: Dispatch<SetStateAction<ISidebarItem>>;
}

const SidebarItem = ({
  item,
  selectedItem,
  setSelectedItem,
}: ISidebarItemProps) => {
  const router = useRouter();
  const { label, icon: Icon, alert, onClick, href } = item;

  const handleClick = useCallback(() => {
    setSelectedItem(item);
    if (onClick) {
      return onClick();
    }

    if (href) router.push(href);
  }, [onClick, href, router, item, setSelectedItem]);

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer items-center justify-between gap-2 p-4 hover:bg-slate-300 hover:bg-opacity-10 ${
        item.id === selectedItem.id ? "shadow-blueInset" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <Icon size={24} />
        </div>

        <p className="hidden lg:block">{label}</p>
      </div>

      {alert ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bluePrimary text-sm text-white">
          2
        </span>
      ) : null}
    </div>
  );
};

export default SidebarItem;
