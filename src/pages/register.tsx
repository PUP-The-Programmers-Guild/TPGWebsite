import ProcessSection from "@/components/Devskolar/Process/Process";
import RequirementSection from "@/components/Devskolar/Requirements/Requirements";
import DevskolarBenefits from "@/components/Devskolar/Benefits/Benefits";
import DevskolarInfo from "@/components/Devskolar/Info/Info";

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
