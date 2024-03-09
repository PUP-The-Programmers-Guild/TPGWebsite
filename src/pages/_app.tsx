import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";

// Test comment 1
// Test comment 2
// Test comment 3
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TPG | The Programmers`&apos; Guild</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
