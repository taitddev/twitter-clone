import { useRouter } from "next/router";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

import Avatar from "../Avatar";
import { useCallback } from "react";
import useLike from "@/hooks/useLike";
import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { BiBookmark, BiDotsVerticalRounded, BiTime } from "react-icons/bi";
import Image from "next/image";

interface IPostItemProps {
  userId?: string;
  post: Record<string, any>;
}

const PostItem = ({ userId, post }: IPostItemProps) => {
  const router = useRouter();

  const { hasLiked, toggleLike } = useLike({ postId: post.id, userId });

  const handleToggleLike = useCallback(
    async (event: any) => {
      event.stopPropagation();
      toggleLike();
    },
    [toggleLike]
  );

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/users/${post.user.id}`);
    },
    [router, post.user.id]
  );

  const isColSpanElement = useCallback(
    (index: number) => {
      return post?.images?.length % 2 && index === 0;
    },
    [post?.images?.length]
  );

  return (
    <div className="relative mb-6 cursor-pointer rounded-2xl bg-lightPrimary p-5 hover:bg-gray-50 hover:transition dark:bg-darkSecondary">
      <div className="flex flex-col gap-8">
        {/* POST HEADER START */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar userId={post.user.id} />

            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2">
                <p
                  className="cursor-pointer font-semibold hover:underline"
                  onClick={goToUser}
                >
                  {post.user.name}
                </p>
                <span
                  className="hidden cursor-pointer text-neutral-500 hover:underline md:block"
                  onClick={goToUser}
                >
                  @{post.user.username}
                </span>
              </div>

              <div className="hidden cursor-pointer items-center gap-1 text-sm text-neutral-500 md:flex">
                <BiTime size={16} />
                <span className="">
                  {moment(new Date(post.createdAt)).fromNow()}
                </span>
              </div>
            </div>
          </div>

          {/* User information */}

          <div className="flex gap-1 text-neutral-700">
            <BiBookmark size={20} />
            <BiDotsVerticalRounded size={20} />
          </div>
        </div>
        {/* POST HEADER END */}

        {/* POST CONTENT START */}
        <div>
          {/* Post body */}
          <pre>{post.body}</pre>

          {/* Post image */}

          {post?.images?.length ? (
            <div className="mt-6 grid h-auto w-full grid-cols-2 gap-3">
              {post?.images?.map((url: string, index: number) => (
                <div
                  key={url}
                  className={`relative min-h-[600px] w-full rounded-lg ${
                    isColSpanElement(index) ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src={url}
                    alt="Uploaded image"
                    sizes="100"
                    quality={80}
                    fill
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* POST CONTENT END */}

        {/* Post action */}
        <div className="flex items-center gap-8">
          <div className="flex cursor-pointer flex-row items-center gap-2 text-neutral-500 transition hover:text-sky-500">
            <AiOutlineComment size={20} />
            <p>{post.comments?.length || 0}</p>
          </div>

          <div
            className="flex cursor-pointer flex-row items-center gap-2 text-neutral-500 transition hover:text-red-500"
            onClick={handleToggleLike}
          >
            {hasLiked ? (
              <AiFillLike color="red" size={20} />
            ) : (
              <AiOutlineLike color="red" size={20} />
            )}

            <p>{post.likedIds.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
