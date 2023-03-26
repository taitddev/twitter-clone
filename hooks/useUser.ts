import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUser = (userId: string) => {
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(userId ? `/api/users/${userId}` : null, fetcher);

  return {
    user,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
