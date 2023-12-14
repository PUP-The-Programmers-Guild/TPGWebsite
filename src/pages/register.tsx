import HeroSection from "@/components/Devskolar/Hero/Hero";
import ProcessSection from "@/components/Devskolar/Process/Process";
import RequirementSection from "@/components/Devskolar/Requirements/Requirements";
import DevskolarBenefits from "@/components/Devskolar/Benefits/Benefits";

export default function RegisterPage() {
  return (
    <>
      <HeroSection />
      <DevskolarBenefits />
      <ProcessSection />
      <RequirementSection />
    </>
  );
}
