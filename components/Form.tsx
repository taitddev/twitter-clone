import { ChangeEvent, useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Dropzone, { useDropzone } from "react-dropzone";

import { CiEdit } from "react-icons/ci";

import useCurrentUser from "@/hooks/useCurrentUser";

import Avatar from "./Avatar";
import Button from "./Button";
import usePosts from "@/hooks/usePosts";
import {
  IoAttachOutline,
  IoCameraOutline,
  IoHappyOutline,
  IoImageOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { Formik } from "formik";
import Image from "next/image";
interface IFormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form = ({ placeholder }: IFormProps) => {
  const { currentUser } = useCurrentUser();

  const [content, setContent] = useState("");
  const [base64Photos, setBase64Photos] = useState<string[]>([]);

  const { mutate: mutatePosts } = usePosts();
  const [isLoading, setIsLoading] = useState(false);

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const isColSpanElement = useCallback(
    (index: number) => {
      return base64Photos?.length % 2 && index === 0;
    },
    [base64Photos?.length]
  );

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64Photos([...base64Photos, event.target.result as string]);
      };
      reader.readAsDataURL(file);
    },
    [base64Photos]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  const handlePost = useCallback(async () => {
    try {
      setIsLoading(true);

      const postPhotoResponses = await Promise.all(
        base64Photos.map((item) =>
          axios.post("/api/upload", { imageBase64: item })
        )
      );

      const postPhotoUrls = postPhotoResponses.map(
        (item) => item?.data?.imageUrl as string
      );

      await axios.post("/api/posts", { body: content, images: postPhotoUrls });
      toast.success("Post created");
      setContent("");
      mutatePosts();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [content, mutatePosts, base64Photos]);

  return (
    <div className="mb-8 rounded-xl bg-lightPrimary p-5 dark:bg-darkSecondary">
      <div className="flex gap-4">
        <div>
          <Avatar userId={currentUser?.id} />
        </div>
        <div className="w-full">
          <textarea
            rows={5}
            placeholder={placeholder}
            className="peer mt-3 w-full text-lg placeholder-neutral-500 outline-none disabled:opacity-80"
            onChange={handleContentChange}
            value={content}
          />
          <hr className="h-[1px] w-full border-lightSecondary opacity-0 transition peer-focus:opacity-100" />

          <div className="mb-8 grid h-auto w-full grid-cols-2 gap-3">
            {base64Photos?.length ? (
              <>
                <input {...getInputProps()} />
                {base64Photos.map((item, index) => (
                  <div
                    key={index}
                    className={`relative min-h-[300px] w-full rounded-lg ${
                      isColSpanElement(index) ? "col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={item}
                      alt="Uploaded image"
                      sizes="100"
                      quality={80}
                      fill
                      className="h-auto w-full rounded-xl object-cover"
                    />
                  </div>
                ))}
              </>
            ) : null}
          </div>

          {/* Post option */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IoCameraOutline size={24} className="text-neutral-700" />
              <button
                {...getRootProps()}
                disabled={base64Photos?.length >= 4}
                className="disabled:opacity-60"
              >
                <IoImageOutline size={24} className="text-neutral-700" />
              </button>
              <IoAttachOutline size={24} className="text-neutral-700" />
              <IoLocationOutline size={24} className="text-neutral-700" />
              <IoHappyOutline size={24} className="text-neutral-700" />
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2">
                <CiEdit size={24} />
                Draft
              </button>

              <Button
                label="Post"
                disabled={isLoading || !content}
                onClick={handlePost}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
