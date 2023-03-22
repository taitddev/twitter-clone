import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

interface IHeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const handleBack = () => {};

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
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
