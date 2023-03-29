import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import {
  BiBell,
  BiBookmark,
  BiChat,
  BiGroup,
  BiHome,
  BiTime,
} from "react-icons/bi";
import { BsBell, BsChat, BsChatDots } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import Avatar from "./Avatar";
import Logo from "./Logo";

type TabItemType = {
  id: number;
  icon: IconType;
};

const tabItems: TabItemType[] = [
  {
    id: 1,
    icon: BiHome,
  },
  {
    id: 2,
    icon: BiGroup,
  },
  {
    id: 3,
    icon: BiTime,
  },
  {
    id: 4,
    icon: BiChat,
  },
  {
    id: 5,
    icon: BiBookmark,
  },
];
const Header = () => {
  const { currentUser } = useCurrentUser();
  const navRef = useRef<HTMLDivElement>(null);
  const [seletedTab, setSeletedTab] = useState(tabItems[0]);

  const addShadowToNavbar = useCallback(() => {
    if (window.scrollY > 10) {
      navRef.current!.classList.add(
        ...[
          "shadow-md",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary/60",
        ]
      );
    } else {
      navRef.current!.classList.remove(
        ...[
          "shadow-md",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary/60",
        ]
      );
    }
  }, []);

  const handleClick = (item: TabItemType) => {
    setSeletedTab(item);
  };

  useEffect(() => {
    window.addEventListener("scroll", addShadowToNavbar);
    return () => {
      window.removeEventListener("scroll", addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  return (
    <div
      className="fixed top-0 z-20 mx-auto mb-4 grid w-full grid-cols-3 items-center bg-lightPrimary p-5 dark:bg-darkSecondary"
      ref={navRef}
    >
      <Logo />
      {/* Navbar */}
      <div className="flex items-center justify-center gap-8">
        {tabItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`${
              item.id === seletedTab.id
                ? "bg-bluePrimary text-lightPrimary"
                : "text-neutral-600"
            } rounded-md p-3`}
          >
            <item.icon size={24}></item.icon>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-end gap-8">
        <div className="flex items-center gap-2">
          <Avatar userId={currentUser?.id} size="small" />
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
