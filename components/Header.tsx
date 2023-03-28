import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface IHeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="sticky top-0 z-[10] w-full border-b-[1px] border-gray-200 bg-transparent p-5 shadow-sm backdrop-blur-xl dark:border-gray-800">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="cursor-pointer transition hover:opacity-70"
          />
        )}
        <h1 className="text-xl font-semibold capitalize">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
