import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const usePost = (postId: string) => {
  const {
    data: post,
    error,
    isLoading,
    mutate,
  } = useSWR(postId ? `/api/posts/${postId}` : null, fetcher);

  return {
    post,
    error,
    isLoading,
    mutate,
  };
};

export default usePost;
