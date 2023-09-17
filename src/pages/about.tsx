import MissionVision from "@/components/About/MissionVision";
import ShowcaseCarousel from "@/components/Home/Hero/ShowcaseCarousel";

export default function AboutPage() {
  return (
    <>
      <div
        className=" flex min-h-[100vh] items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(100% 418.39% at 100% 100%, #343534 0%, #1E5C3F 33.33%, #409C49 66.67%, #FFEC5C 100%)",
        }}
      >
        <ShowcaseCarousel />
      </div>
      <MissionVision />
    </>
  );
}
