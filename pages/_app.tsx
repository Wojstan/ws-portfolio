import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon.png" />
        <title>Wojciech Staniszewski &#x1F64C;</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
