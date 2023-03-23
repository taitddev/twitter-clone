import Image from "next/image";

interface IAvatarProps {
  userId: string | number;
}

const Avatar: React.FC<IAvatarProps> = ({ userId }) => {
  const onClick = () => {};
  return (
    <div className="relative h-12 w-12 cursor-pointer rounded-full transition hover:opacity-90">
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src="/images/placeholder.png"
      />
    </div>
  );
};

export default Avatar;
