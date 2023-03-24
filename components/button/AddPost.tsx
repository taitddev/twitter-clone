import { useRouter } from "next/router";
import { useCallback } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

import { FiFeather } from "react-icons/fi";

const AddPost = () => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const { currentUser } = useCurrentUser();

  const handleAddPost = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push("/");
  }, [loginModal, router, currentUser]);
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-full bg-sky-500 p-4"
      onClick={handleAddPost}
    >
      <FiFeather size={20} />
      <span className="hidden font-semibold lg:block">New post</span>
    </button>
  );
};

export default AddPost;
