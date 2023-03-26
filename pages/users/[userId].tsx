import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const Profile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { user, isLoading } = useUser(userId as string);

  if (isLoading || !user)
    return (
      <div className="flex h-full items-center justify-center">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );

  return (
    <>
      <Header label={user?.name} />
    </>
  );
};

export default Profile;
