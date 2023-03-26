import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";

interface IFormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<IFormProps> = ({ placeholder }) => {
  return (
    <div className="border-b-[1px] border-lightSecondary px-5 py-2">
      <div className="flex gap-4">
        <div>
          <Avatar userId={"12345"} />
        </div>
        <div className="w-full">
          <textarea
            name=""
            id=""
            placeholder={placeholder}
            className="peer w-full resize-none placeholder-neutral-500 disabled:opacity-80"
          />
          <hr className="h-[1px] w-full border-neutral-800 opacity-0 transition peer-focus:opacity-100" />
          <div className="mt-4 flex flex-row justify-end">
            <Button label="Post" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
