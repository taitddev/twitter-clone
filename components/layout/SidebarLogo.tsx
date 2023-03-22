import { useRouter } from "next/router";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex h-14 w-14 cursor-pointer select-none items-center justify-center 
      rounded-full text-2xl hover:bg-blue-300 hover:bg-opacity-10"
    >
      G.
    </div>
  );
};

export default SidebarLogo;
