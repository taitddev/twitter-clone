import Image from "next/image";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface IAvatarProps {
  userId: string;
  size?: "small" | "medium" | "large";
}

const Avatar: React.FC<IAvatarProps> = ({ userId, size = "medium" }) => {
  const { user } = useUser(userId);

  const getSize = useCallback(() => {
    switch (size) {
      case "small":
        return "h-10 w-10";

      case "medium":
        return "h-12 w-12";

      case "large":
        return "h-16 w-16";

      default:
        return "";
    }
  }, [size]);

  const onClick = () => {};
  return (
    <div
      className={`relative cursor-pointer rounded-full ring-4 ring-gray-200 transition hover:opacity-90 ${getSize()}`}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        sizes="20"
        alt="Avatar"
        onClick={onClick}
        src={user?.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
