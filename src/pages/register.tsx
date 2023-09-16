import HeroSection from "../components/Devskolar/Hero";
import ProcessSection from "../components/Devskolar/Process";
import RequirementSection from "../components/Devskolar/Requirements";

export default function RegisterPage() {
  return (
    <div>
      <HeroSection
        titleFirstPart="BE A"
        titleSecondPart="DEV"
        titleThirdPart="SKOLAR"
      />
      <ProcessSection/> {/*Process Section*/}
      <RequirementSection/>  {/*Requirement Section*/}
      {/* The rest of your page content goes here */}
    </div>
  );
}
