import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { BiBookmark, BiChat, BiGroup, BiHome, BiTime } from "react-icons/bi";

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
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const [seletedTab, setSeletedTab] = useState(tabItems[0]);

  const addShadowToNavbar = useCallback(() => {
    if (window.scrollY > 10) {
      navRef.current!.classList.add(
        ...[
          "shadow-md",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary/70",
        ]
      );
    } else {
      navRef.current!.classList.remove(
        ...[
          "shadow-md",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary/70",
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
      className="sticky top-8 z-20 mx-auto mb-4 flex flex-1 items-center justify-around gap-8 rounded-br-3xl rounded-bl-3xl bg-lightPrimary p-5"
      ref={navRef}
    >
      {tabItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className={`${
            item.id === seletedTab.id
              ? "bg-violet-700 text-lightPrimary"
              : "text-neutral-600"
          } rounded-md p-3`}
        >
          <item.icon size={24}></item.icon>
        </button>
      ))}
    </div>
  );
};

export default Header;
