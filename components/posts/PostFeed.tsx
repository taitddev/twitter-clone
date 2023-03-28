import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface IPostFeedProps {
  userId?: string;
}

const PostFeed = ({ userId }: IPostFeedProps) => {
  const { posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem key={post.id} userId={userId} post={post} />
      ))}
    </>
  );
};

export default PostFeed;
