import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const usePosts = (userId?: string) => {
  const url = userId ? `/api/posts?userId=${userId}` : "/api/posts";
  const { data: posts, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    posts,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;
