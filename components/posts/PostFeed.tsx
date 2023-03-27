import usePosts from "@/hooks/usePosts";

interface IPostFeedProps {
  userId?: string;
}

const PostFeed = ({ userId }: IPostFeedProps) => {
  const { posts = [] } = usePosts(userId);

  return <>PostFeed</>;
};

export default PostFeed;
