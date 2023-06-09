import React, { Dispatch, SetStateAction, useState } from "react";
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
import { PageType } from "./Container";
import SubmitButton from "../button/SubmitButton";

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

interface IRegisterFormProps {
  setPageType: Dispatch<SetStateAction<PageType>>;
}

const Register = ({ setPageType }: IRegisterFormProps) => {
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
      setPageType("login");
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
            value={values.name}
          />
          <Input
            name="username"
            type="text"
            placeholder="Enter your username"
            startIcon={AiOutlineUser}
            onChange={handleChange}
            value={values.username}
          />

          <Input
            name="email"
            type="email"
            placeholder="Email address"
            startIcon={AiOutlineMail}
            onChange={handleChange}
            value={values.email}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            startIcon={AiOutlineLock}
            onChange={handleChange}
            value={values.password}
          />

          <div className="mt-10">
            <SubmitButton label="Sign up" />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Register;
