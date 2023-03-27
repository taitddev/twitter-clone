import useUser from "@/hooks/useUser";
import Image from "next/image";
import Avatar from "../Avatar";

interface IBackgroundProps {
  userId: string;
}

const Background = ({ userId }: IBackgroundProps) => {
  const { user } = useUser(userId);

  return (
    <div className="relative h-[36%] w-full bg-neutral-700 pb-[1/3]">
      {user?.coverImage && (
        <Image
          src={user?.coverImage}
          fill
          sizes="100"
          alt="Cover Image"
          className="object-cover"
        />
      )}
      <div className="absolute -bottom-16 left-4">
        <Avatar userId={userId} />
      </div>
    </div>
  );
};

export default Background;
