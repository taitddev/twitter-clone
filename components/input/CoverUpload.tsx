import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { BiImageAdd, BiX } from "react-icons/bi";

interface IImageUploadProps {
  onChange: (base64: string) => void;
  value?: string;
  disabled?: boolean;
}

const CoverUpload = ({ onChange, value, disabled }: IImageUploadProps) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
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

  const clearCoverImage = () => {
    setBase64(undefined);
  };

  return (
    <div className="relative">
      <div className="relative flex min-h-[300px] w-full items-center justify-center gap-2 overflow-hidden">
        <button
          type="button"
          {...getRootProps({
            className: "z-10 rounded-full bg-gray-800 bg-opacity-50 p-4",
          })}
        >
          <BiImageAdd size={20} />
        </button>
        <input {...getInputProps()} />
        {base64 ? (
          <>
            <button
              type="button"
              {...getRootProps({
                className: "z-10 rounded-full bg-gray-800 bg-opacity-50 p-4",
              })}
              onClick={clearCoverImage}
            >
              <BiX size={20} />
            </button>
            <Image
              src={base64}
              alt="Uploaded image"
              fill
              className="object-cover opacity-80"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CoverUpload;
