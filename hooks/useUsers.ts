import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const {
    data: users,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/users", fetcher);

  return {
    users,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
