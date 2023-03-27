import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useEditModal from "@/hooks/useEditModal";
import Button from "../Button";
import { BiCalendar } from "react-icons/bi";

interface IBioProps {
  userId: string;
}
const Bio = ({ userId }: IBioProps) => {
  const { currentUser } = useCurrentUser();
  const { user } = useUser(userId);
  const { onOpen } = useEditModal();

  return (
    <div className="border-b-[1px] border-lightSecondary pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button primary label="Edit" onClick={onOpen} />
        ) : (
          <Button label="Follow" />
        )}
      </div>

      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold">{user?.name}</p>
          <p className="text-md text-neutral-500">@{user?.username}</p>
        </div>
        <div className="mt-4 flex flex-col">
          <p>{user?.bio}</p>
          <div
            className="
              mt-4 
              flex 
              flex-row 
              items-center 
              gap-2 
              text-neutral-500
          "
          >
            <BiCalendar size={24} />
            <p>Tham gia {moment(new Date(user?.createdAt)).format("LL")}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-1">
            <p>{user?.followingIds?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p>{user?.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
