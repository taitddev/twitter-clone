import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import Avatar from "../Avatar";

interface IBackgroundProps {
  userId: string;
}

const Background = ({ userId }: IBackgroundProps) => {
  const { user } = useUser(userId);

  return (
    <div className="relative h-44 bg-neutral-700">
      {user?.coverImage && (
        <Image
          src={user?.coverImage}
          fill
          alt="Cover Image"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="absolute -bottom-16 left-4">
        <Avatar userId={userId} />
      </div>
    </div>
  );
};

export default Background;
