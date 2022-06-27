
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react"


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.StrictMode>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </React.StrictMode>

  );
}


export default MyApp
