import { useRouter } from "next/router";

import useCurrentUser from "@/hooks/useCurrentUser";
import Avatar from "../Avatar";

interface IPostItemProps {
  userId?: string;
  post: Record<string, any>;
}

const PostItem = ({ userId, post }: IPostItemProps) => {
  const router = useRouter();
  const { currentUser } = useCurrentUser();

  return (
    <div className="cursor-pointer border-b-[1px] border-gray-200 p-5 transition hover:bg-gray-200">
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={post.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p className="cursor-pointer font-semibold hover:underline">
              {post.user.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
