import {
  DiscordLogo,
  Envelope,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Placeholder from "../../public/Placeholder.png";

export default function Footer() {
  return (
    <>
      <div className="relative mx-auto flex min-h-[33vh] w-full overflow-hidden bg-neutral-600 px-10 py-6">
        <div className="self-center">
          <Image src={Placeholder} alt="placeholder" width="162" height="162" />
        </div>
        <span className="mx-10 inline-block min-h-full w-0.5 self-stretch bg-[#83948C]" />
        <div className="inline-block pt-4">
          <p className="mb-2 text-lg font-bold uppercase text-white">
            Get In touch with us!
          </p>
          <div className="flex space-x-14">
            <div>
              <div className="flex">
                <Envelope color="#BAA3A3" size={32} weight="fill" />
                <span className="ml-2 font-bold text-green-400">Email</span>
              </div>
              <span className="text-sm font-light leading-tight text-white underline">
                <a href="mailto:puptpg.partnerships@gmail.com">
                  puptpg.partnerships@gmail.com
                </a>
              </span>
            </div>
            <div>
              <span className="font-bold text-green-400">Social Media</span>
              <div className="flex space-x-4">
                <a
                  href={process.env.NEXT_PUBLIC_LINK_FB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookLogo color="#BAA3A3" size={42} weight="fill" />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_LINK_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo color="#BAA3A3" size={42} weight="fill" />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_LINK_GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo color="#BAA3A3" size={42} weight="fill" />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_LINK_DISCORD}
                  target="_blank"
                  rel="noreferrer"
                >
                  <DiscordLogo color="#BAA3A3" size={42} weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-5 -top-10 bg-clip-padding object-none gradient-mask-l-40">
          <Image src={Placeholder} alt="placeholder" width="276" height="276" />
        </div>
      </div>

      <div className="w-full bg-[#B4BEB9] py-1 text-center">
        <span className="text-xs font-light">
          (C) 2022 PUP The Programmers' Guild All rights reserved
        </span>
      </div>
    </>
  );
}
