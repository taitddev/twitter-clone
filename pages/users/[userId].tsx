import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import React from "react";

const Profile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { user, isLoading } = useUser(userId as string);
  console.log("🚀 ~ file: [userId].tsx:11 ~ Profile ~ user:", user);

  if (isLoading || !user) return null;

  return (
    <>
      <Header label={user?.name} />
    </>
  );
};

export default Profile;
