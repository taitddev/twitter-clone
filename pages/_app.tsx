import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { DarkModeProvider } from "@/context/darkModeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Edit from "@/components/modals/Edit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ToastContainer position="bottom-right" />
      <Edit />
      <DarkModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeProvider>
    </SessionProvider>
  );
}
