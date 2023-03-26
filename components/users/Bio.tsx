import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useEditModal from "@/hooks/useEditModal";
import Button from "../Button";

interface IBioProps {
  userId: string;
}
const Bio = ({ userId }: IBioProps) => {
  const { currentUser } = useCurrentUser();
  const { user } = useUser(userId);
  const { onOpen } = useEditModal();

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button primary label="Edit" onClick={onOpen} />
        ) : (
          <Button label="Follow" />
        )}
      </div>
    </div>
  );
};

export default Bio;
