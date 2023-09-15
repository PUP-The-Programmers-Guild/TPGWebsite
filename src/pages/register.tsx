import HeroSection from "../components/Devskolar/Hero";
import ProcessSection from "../components/Devskolar/Process";

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
      {/* The rest of your page content goeshere */}
    </div>
  );
}
