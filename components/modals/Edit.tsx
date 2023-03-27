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
import CoverUpload from "../input/CoverUpload";
import AvatarUpload from "../input/AvatarUpload";

interface FormValues {
  name: string;
  username: string;
  bio: string;
  coverImage?: string;
  profileImage?: string;
}

const editUserSchema = yup.object().shape({
  name: yup.string().required("required"),
  username: yup.string().required("required"),
  bio: yup.string().required("required"),
});

const Edit = () => {
  const { currentUser } = useCurrentUser();
  const { mutate } = useUser(currentUser?.id);
  const { isOpen, onClose } = useEditModal();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {};

  const handleFormSubmit = async ({
    name,
    username,
    bio,
    coverImage,
    profileImage,
  }: FormValues) => {
    try {
      setIsLoading(true);

      const profileResponse = await axios.post("/api/upload", {
        imageBase64: profileImage,
      });

      const coverResponse = await axios.post("/api/upload", {
        imageBase64: coverImage,
      });

      const profileUrl = profileResponse.data?.imageUrl;
      const coverUrl = coverResponse.data?.imageUrl;

      await axios.patch("/api/edit", {
        name,
        username,
        bio,
        profileImage: profileUrl,
        coverImage: coverUrl,
      });
      mutate();
      toast.success("Updated successfully!");
      onClose();
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
    profileImage: currentUser?.profileImage,
    coverImage: currentUser?.coverImage,
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
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <CoverUpload
                value={values?.coverImage}
                setFieldValue={setFieldValue}
              />

              <AvatarUpload
                value={values?.profileImage}
                setFieldValue={setFieldValue}
              />

              <div className="mt-16 p-8">
                <Input
                  name="name"
                  placeholder="Name"
                  startIcon={AiOutlineIdcard}
                  onChange={handleChange}
                  value={values?.name}
                />
                <Input
                  name="username"
                  placeholder="Username"
                  startIcon={AiOutlineUser}
                  onChange={handleChange}
                  value={values?.username}
                />
                <Input
                  name="bio"
                  placeholder="Bio"
                  startIcon={SiAboutdotme}
                  onChange={handleChange}
                  value={values?.bio}
                />
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full transform rounded-lg bg-blue-500 px-6 py-4 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default Edit;
