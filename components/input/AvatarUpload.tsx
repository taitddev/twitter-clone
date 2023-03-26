import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { BiImageAdd, BiX } from "react-icons/bi";

interface IImageUploadProps {
  onChange: (base64: string) => void;
  value?: string;
  disabled?: boolean;
}

const AvatarUpload = ({ onChange, value, disabled }: IImageUploadProps) => {
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

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-2/4 h-32 w-32 translate-y-2/4 -translate-x-2/4 rounded-full">
        <div className="relative flex h-full w-full items-center justify-center">
          <input {...getInputProps()} />
          {base64 ? (
            <>
              <Image
                src={base64}
                alt="Uploaded image"
                fill
                className="rounded-full object-cover"
              />
            </>
          ) : null}
          <button
            type="button"
            {...getRootProps({
              className: "absolute rounded-full bg-gray-800 bg-opacity-50 p-4",
            })}
          >
            <BiImageAdd size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
