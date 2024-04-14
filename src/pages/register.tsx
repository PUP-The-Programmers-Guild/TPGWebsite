//import ProcessSection from "@/components/Devskolar/Process/Process";
//import RequirementSection from "@/components/Devskolar/Requirements/Requirements";
//import DevskolarBenefits from "@/components/Devskolar/Benefits/Benefits";
//import DevskolarInfo from "@/components/Devskolar/Info/Info";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const MaintenanceNotice = dynamic(() => import("@/components/base/MaintenanceNotice"), { ssr: true });

export default function RegisterPage() {
  return (
    <>
      <NextSeo title="Register | PUP The Programmers' Guild" noindex={true} />
      {/*       <DevskolarInfo />
      <DevskolarBenefits />
      <ProcessSection />
      <RequirementSection /> */}
      <MaintenanceNotice redirectLink="/" redirectMessage="Go back to homepage." />
    </>
  );
}
