import DevskolarBenefits from "@/components/Devskolar/Benefits";
import HeroSection from "@/components/Devskolar/Hero/Hero";
import ProcessSection from "@/components/Devskolar/Process/Process";
import RequirementSection from "@/components/Devskolar/Requirements/Requirements";
import DevskolarInfo from "../components/Devskolar/Info/Info";

export default function RegisterPage() {
  return (
    <>
      <DevskolarInfo />
      <DevskolarBenefits />
      <ProcessSection />
      <RequirementSection />
    </>
  );
}
