import HeroSection from "../components/Devskolar/Hero";
import DevskolarBenefitsPage from "@/components/Devskolar/Benefits/Benefits";

export default function RegisterPage() {
  return (
    <div>
      <HeroSection
        titleFirstPart="BE A"
        titleSecondPart="DEV"
        titleThirdPart="SKOLAR"
      />
      <DevskolarBenefitsPage />
    </div>
  );
}
