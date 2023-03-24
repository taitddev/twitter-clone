import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export type PageType = "login" | "register";

const Container = () => {
  const [pageType, setPageType] = useState<PageType>("login");

  const isLogin = pageType === "login";

  const togglePageType = () => {
    setPageType(pageType === "login" ? "register" : "login");
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col gap-6">
        {/* Form */}
        {isLogin ? <Login /> : <Register />}
        {/* Link to toggle login and register form */}
        <div className="text-center">
          <span
            className="cursor-pointer text-sm text-blue-500 hover:underline dark:text-blue-400"
            onClick={togglePageType}
          >
            {isLogin
              ? "Don’t have an account yet? Sign up."
              : "Already have an account? Login here."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Container;
