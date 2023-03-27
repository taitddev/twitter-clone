import Image from "next/image";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

interface IAvatarProps {
  userId: string;
}

const Avatar: React.FC<IAvatarProps> = ({ userId }) => {
  const { user } = useUser(userId);

  const onClick = () => {};
  return (
    <div className="relative h-12 w-12 cursor-pointer rounded-full ring-4 ring-gray-200 transition hover:opacity-90">
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
