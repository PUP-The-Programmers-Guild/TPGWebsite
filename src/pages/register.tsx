import HeroSection from "../components/Devskolar/Hero/Hero";
import ProcessSection from "../components/Devskolar/Process/Process";
import RequirementSection from "../components/Devskolar/Requirements/Requirements";

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
