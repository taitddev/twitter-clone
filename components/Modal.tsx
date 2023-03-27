import { ReactNode, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  children?: ReactNode;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800 bg-opacity-70 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto h-full w-full lg:h-auto lg:w-3/6 lg:max-w-2xl">
          {/*content*/}
          <div className="relative flex h-full w-full flex-col rounded-lg border-0 bg-lightSecondary shadow-lg outline-none focus:outline-none dark:bg-darkSecondary dark:text-lightPrimary lg:h-auto">
            {/* Header */}
            <div className="flex items-center justify-between rounded-t p-8">
              <h3 className="text-xl font-semibold">{title}</h3>
              <button
                className="ml-auto border-0 p-1 transition hover:opacity-70"
                onClick={handleClose}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
