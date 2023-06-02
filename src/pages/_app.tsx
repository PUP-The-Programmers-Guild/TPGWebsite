import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

// This is just a test comment to try pushing in dev branch
// This is yet another test comment
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TPG | The Programmers' Guild</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
