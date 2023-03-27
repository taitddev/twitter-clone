import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Formik } from "formik";
import * as yup from "yup";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Input from "../input/InputBase";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

interface FormValues {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin: FormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async ({ email, password }: FormValues) => {
    try {
      setIsLoading(true);

      await signIn("credentials", {
        email,
        password,
      });

      toast.success("Logged in");
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
      validationSchema={loginSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="min-w-[500px]">
          <div className="m-8 flex items-center gap-2 overflow-hidden rounded-md border-[1px] border-sky-600 p-4">
            <BsInfoCircleFill size={24} className="text-blue-500" />

            <div className="flex h-full bg-black">
              <span>Bạn phải đăng nhập để tiếp tục</span>
            </div>
          </div>

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
            <button
              type="submit"
              className="w-full transform rounded-lg bg-blue-500 px-6 py-4 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign in
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Login;
