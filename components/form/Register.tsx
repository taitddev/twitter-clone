import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Input from "../input/InputBase";
import axios from "axios";
import { toast } from "react-toastify";

import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineIdcard,
} from "react-icons/ai";

interface FormValues {
  name: string;
  username: string;
  email: string;
  password: string;
}

const registerSchema = yup.object().shape({
  name: yup.string().required("required"),
  username: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin: FormValues = {
  email: "",
  password: "",
  name: "",
  username: "",
};

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async ({
    name,
    username,
    email,
    password,
  }: FormValues) => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });
      setIsLoading(false);
      toast.success("Account created.");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={registerSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="min-w-[500px]">
          <Input
            name="name"
            type="text"
            placeholder="Enter your name"
            startIcon={AiOutlineIdcard}
            onChange={handleChange}
          />
          <Input
            name="username"
            type="text"
            placeholder="Enter your username"
            startIcon={AiOutlineUser}
            onChange={handleChange}
          />

          <Input
            name="email"
            type="email"
            placeholder="Email address"
            startIcon={AiOutlineMail}
            onChange={handleChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            startIcon={AiOutlineLock}
            onChange={handleChange}
          />

          <div className="mt-10">
            <button
              type="submit"
              className="w-full transform rounded-lg bg-blue-500 px-6 py-4 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign up
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Register;
