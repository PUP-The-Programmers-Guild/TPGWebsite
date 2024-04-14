import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const NotfoundNotice = dynamic(() => import("@/components/base/NotfoundNotice"), { ssr: true });

export default function Custom404() {
  <NextSeo noindex={true} />;
  return (
    <>
      <NextSeo title="404 Page Not Found | PUP The Programmers' Guild" noindex={true} />
      <NotfoundNotice />
    </>
  );
}
