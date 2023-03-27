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

const CoverUpload = ({ value, disabled, setFieldValue }: IImageUploadProps) => {
  const [base64, setBase64] = useState(value);

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        setFieldValue("coverImage", event.target.result);
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
      <div className="relative flex min-h-[300px] w-full items-center justify-center gap-2 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 top-[80%] bg-gradient-to-b from-transparent to-black"></div>
        <button
          type="button"
          {...getRootProps({
            className:
              "absolute bottom-5 right-5 bg-white z-[100] rounded-xl bg-lightSecondary text-darkPrimary bg-opacity-90 p-3 flex gap-2 items-center text-sm",
          })}
        >
          <BiImageAdd size={18} />
          <span>Thêm ảnh bìa</span>
        </button>
        <input {...getInputProps()} />
        {base64 ? (
          <>
            <Image
              src={base64}
              alt="Uploaded image"
              sizes="40"
              fill
              className="object-cover"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CoverUpload;
