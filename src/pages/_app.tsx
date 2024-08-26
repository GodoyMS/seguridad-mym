import MainLayout from "@/layout/MainLayout";
import type { AppProps } from "next/app";
import "@/styles/globals.css"

export default function App({ Component, pageProps, router }: AppProps) {
  const getLayout = () => {
    if (router.pathname === "/") {
      return <Component {...pageProps} />;
    } else {
      return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      );
    }
  };

  return <div className="  w-full">{getLayout()}</div>;
}
