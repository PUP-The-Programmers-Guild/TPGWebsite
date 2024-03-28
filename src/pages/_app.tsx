import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";

import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";

const MaintenanceNotice = dynamic(() => import("@/components/base/MaintenanceNotice"), { ssr: true });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TPG | The Programmers`&apos; Guild</title>
      </Head>

      <Layout className="hidden lg:block">
        <Component {...pageProps} />
      </Layout>
      <MaintenanceNotice
        redirectLink="https://www.facebook.com/PUPTPG"
        title="Under Maintenance"
        subtitle="Heads Up! Our site's mobile version is under construction. Stay tuned in our Facebook page for more information and updates."
        redirectMessage="Go to PUPTPG Facebook Page"
        className="flex lg:hidden"
      />
    </>
  );
}
