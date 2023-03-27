import { ChangeEvent, useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import useCurrentUser from "@/hooks/useCurrentUser";

import Avatar from "./Avatar";
import Button from "./Button";

interface IFormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form = ({ placeholder }: IFormProps) => {
  const { currentUser } = useCurrentUser();

  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handlePost = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/posts", { content });
      toast.success("Post created");
      setContent("");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [content]);

  return (
    <div className="border-b-[1px] border-lightSecondary px-5 py-2">
      <div className="flex gap-4">
        <div>
          <Avatar userId={currentUser?.id} />
        </div>
        <div className="w-full">
          <textarea
            placeholder={placeholder}
            className="peer mt-3 w-full resize-none text-lg placeholder-neutral-500 outline-none disabled:opacity-80"
            onChange={handleContentChange}
          />
          <hr className="h-[1px] w-full border-lightSecondary opacity-0 transition peer-focus:opacity-100" />
          <div className="mt-4 flex flex-row justify-end">
            <Button
              label="Post"
              disabled={isLoading || !content}
              onClick={handlePost}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
