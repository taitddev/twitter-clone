import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { BiImageAdd, BiX } from "react-icons/bi";

interface IImageUploadProps {
  value?: string;
  disabled?: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const AvatarUpload = ({
  value,
  disabled,
  setFieldValue,
}: IImageUploadProps) => {
  const [base64, setBase64] = useState(value);

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        setFieldValue("profileImage", event.target.result);
      };
      reader.readAsDataURL(file);
    },
    [setFieldValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-2/4 h-32 w-32 translate-y-2/4 -translate-x-2/4 rounded-full ring-4 ring-lightPrimary ring-offset-2 dark:ring-slate-700 dark:ring-offset-0">
        <div className="relative flex h-full w-full items-center justify-center">
          <input {...getInputProps()} />
          {base64 ? (
            <>
              <Image
                src={base64}
                alt="Uploaded image"
                sizes="100"
                quality={80}
                fill
                className="rounded-full object-cover"
              />
            </>
          ) : null}
          <button
            type="button"
            {...getRootProps({
              className:
                "absolute bottom-0 right-0 rounded-full bg-gray-200 text-darkPrimary dark:bg-gray-700 dark:text-lightPrimary shadow-sm bg-opacity-90 p-2",
            })}
          >
            <BiImageAdd size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
