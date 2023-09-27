import DevskolarBenefits from "@/components/Devskolar/Benefits";
import HeroSection from "@/components/Devskolar/Hero/Hero";
import ProcessSection from "@/components/Devskolar/Process/Process";
import RequirementSection from "@/components/Devskolar/Requirements/Requirements";

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
