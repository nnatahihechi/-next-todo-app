import type { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import styles from "../styles/_app.module.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserAuthProvider } from "../src/content/userContext";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div className={styles.container}>
      <UserAuthProvider>
        <GoogleOAuthProvider
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
        >
          <React.StrictMode>
            <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
          </React.StrictMode>
        </GoogleOAuthProvider>
      </UserAuthProvider>
    </div>
  );
}

export default MyApp;
