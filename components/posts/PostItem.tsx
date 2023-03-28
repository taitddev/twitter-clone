import { useRouter } from "next/router";
import { BiComment, BiLike } from "react-icons/bi";

import useCurrentUser from "@/hooks/useCurrentUser";
import Avatar from "../Avatar";

interface IPostItemProps {
  userId?: string;
  post: Record<string, any>;
}

const PostItem = ({ userId, post }: IPostItemProps) => {
  const router = useRouter();

  return (
    <div className="cursor-pointer border-b-[1px] border-gray-200 p-5 transition hover:bg-gray-200">
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={post.user.id} />
        <div>
          {/* User information */}
          <div className="flex flex-row items-center gap-2">
            <p className="cursor-pointer font-semibold hover:underline">
              {post.user.name}
            </p>
            <span className="hidden cursor-pointer text-neutral-500 hover:underline md:block">
              @{post.user.username}
            </span>
          </div>
          {/* Post content */}
          <div className="mt-1">{post.body}</div>
          {/* Post action */}
          <div className="mt-3 flex flex-row items-center gap-10">
            <div className="flex cursor-pointer flex-row items-center gap-2 text-neutral-500 transition hover:text-sky-500">
              <BiComment size={20} />
              <p>{post.comments?.length || 0}</p>
            </div>

            <div className="flex cursor-pointer flex-row items-center gap-2 text-neutral-500 transition hover:text-red-500">
              <BiLike color="red" size={20} />
              <p>{post.likedIds.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
