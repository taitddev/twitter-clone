import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Register from "@/components/modals/Register";
import Login from "@/components/modals/Login";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ToastContainer position="bottom-right" />
      <Register />
      <Login />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
