
import { RecoilRoot } from 'recoil'
import styles from '../styles/_app.module.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react"
import { GoogleOAuthProvider } from '@react-oauth/google';
import {UserAuthProvider} from '../src/content/userContext'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className={styles.container}>
    <UserAuthProvider>
  <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}` }>
    <React.StrictMode>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </React.StrictMode>
    </GoogleOAuthProvider>
    </UserAuthProvider>
    </div>
  );
}


export default MyApp
