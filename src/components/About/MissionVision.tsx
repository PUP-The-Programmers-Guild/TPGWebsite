import { LightbulbFilament, RocketLaunch } from "@phosphor-icons/react";
import Image from "next/image";

const MissionInfo = {
  title: "Mission",
  content: `Our mission is to be an online committee of curious and interested individuals who desires to innovate and create by utilizing IT, putting together great minds and building something that will be greater than they have imagined it to be.`,
  icon: <RocketLaunch size={40} weight="fill" />,
};
const VisionInfo = {
  title: "Vision",
  content: `We envision ourselves to be a strong organization that enriches the ability of students to outstandingly perform activities and competitions in all fields of Information Technology together, towards the goal of building better bonds and beneficial output to the society.`,
  icon: <LightbulbFilament size={40} weight="fill" />,
};

export default function MissionVision() {
  return (
    <section className="flex min-h-screen items-center justify-center gap-x-[4.56rem]  text-white">
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
          <div key={info.title}>
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
