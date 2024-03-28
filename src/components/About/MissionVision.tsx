import { LightbulbFilament } from "@phosphor-icons/react/dist/ssr/LightbulbFilament";
import { RocketLaunch } from "@phosphor-icons/react/dist/ssr/RocketLaunch";
import Image from "next/image";

const MissionInfo = {
  title: "Mission",
  content: `Our mission is to be a strong academic organization of the Polytechnic University of the Philippines that enriches the ability of students to outstandingly perform activities, especially in the field of Information Technology through computer programming, together towards the goal of building better bonds and beneficial output to the society. `,
  icon: <RocketLaunch size={40} weight="fill" />,
};
const VisionInfo = {
  title: "Vision",
  content: `We envision ourselves to be an innovative and productive academic organization of brilliant minds excelling in different fields of programming which projects will contributing to the society and establishing a fun learning environment.`,
  icon: <LightbulbFilament size={40} weight="fill" />,
};

export default function MissionVision() {
  return (
    <section id="missionvision" className="flex min-h-screen items-center justify-center gap-x-[4.56rem]  text-white">
      <div className="absolute -z-20 h-full w-full bg-[radial-gradient(1718.21%_485.56%_at_-1%_463.56%,_#2A9134_0%,_#052014_85.26%)] px-[240px] py-[240px]">
        <Image
          src="/TPGMembersBanner.webp"
          alt="TPG Mission-Vision Background Image"
          fill
          className="z-10 h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="flex max-w-[960px] flex-row justify-between gap-x-[80px] ">
        {[VisionInfo, MissionInfo].map((info) => (
          <div key={info.title} className="max-w-[440px]">
            <div className="mb-[40px] flex items-start gap-x-6">
              <h2 className="font-heading text-4xl font-bold">{info.title}</h2>
              <div className="h-10 w-10 text-white">{info.icon}</div>
            </div>
            <p className="font-body text-2xl leading-[36px]">{info.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
