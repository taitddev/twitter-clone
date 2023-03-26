import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as yup from "yup";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useEditModal from "@/hooks/useEditModal";

import Modal from "../Modal";
import Input from "../input/InputBase";

import { AiOutlineUser, AiOutlineIdcard } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";

interface FormValues {
  name: string;
  username: string;
  bio: string;
}

const editUserSchema = yup.object().shape({
  name: yup.string().required("required"),
  username: yup.string().required("required"),
  bio: yup.string().required("required"),
});

const Edit = () => {
  const { currentUser } = useCurrentUser();
  const { mutate } = useUser(currentUser?.id);
  const { isOpen, onOpen, onClose } = useEditModal();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {};

  const handleFormSubmit = async ({ name, username, bio }: FormValues) => {
    try {
      setIsLoading(true);
      await axios.patch("/api/edit", { name, username, bio });
      setIsLoading(false);
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const initialValues: FormValues = {
    name: currentUser?.name,
    username: currentUser?.username,
    bio: currentUser?.bio,
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Edit your profile"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4">
        <Formik
          initialValues={initialValues}
          validationSchema={editUserSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Name"
                startIcon={AiOutlineIdcard}
                onChange={handleChange}
              />
              <Input
                name="username"
                placeholder="Username"
                startIcon={AiOutlineUser}
                onChange={handleChange}
              />
              <Input
                name="bio"
                placeholder="Bio"
                startIcon={SiAboutdotme}
                onChange={handleChange}
              />
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full transform rounded-lg bg-blue-500 px-6 py-4 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default Edit;
