import { DiscordLogo, Envelope, FacebookLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Placeholder from "../../public/Placeholder.png"

export default function Footer() {
    return (
        <>
            <div className="overflow-hidden relative mx-auto flex w-full min-h-[33vh] bg-neutral-600 px-10 py-6">
                <div className="self-center">
                    <Image src={Placeholder} width="162" height="162"/>
                </div>
                <span className="inline-block self-stretch min-h-full w-0.5 bg-[#83948C] mx-10"/>
                <div className="inline-block pt-4">
                    <p className="text-white text-lg uppercase font-bold mb-2">
                        Get In touch with us!
                    </p>
                    <div className="flex space-x-14">
                        <div>
                            <div className="flex">
                                <Envelope color="#BAA3A3" size={32} weight="fill" />
                                <span className="text-green-400 font-bold ml-2">Email</span>
                            </div>
                            <span className="text-white underline font-light text-sm leading-tight">
                                <a href="mailto:puptpg.partnerships@gmail.com">puptpg.partnerships@gmail.com</a>
                            </span>
                        </div>
                        <div>
                            <span className="text-green-400 font-bold">Social Media</span>
                            <div className="flex space-x-4">
                                <a href={process.env.NEXT_PUBLIC_LINK_FB} target="_blank" rel="noreferrer">
                                    <FacebookLogo color="#BAA3A3" size={42} weight="fill" />
                                </a>
                                <a href={process.env.NEXT_PUBLIC_LINK_LINKEDIN} target="_blank" rel="noreferrer">
                                    <LinkedinLogo color="#BAA3A3" size={42} weight="fill" />
                                </a>
                                <a href={process.env.NEXT_PUBLIC_LINK_GITHUB} target="_blank" rel="noreferrer">
                                    <GithubLogo color="#BAA3A3" size={42} weight="fill" />
                                </a>
                                <a href={process.env.NEXT_PUBLIC_LINK_DISCORD} target="_blank" rel="noreferrer">
                                    <DiscordLogo color="#BAA3A3" size={42} weight="fill" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-10 -right-5 bg-clip-padding gradient-mask-l-40 object-none">
                    <Image src={Placeholder} width="276" height="276"/>
                </div>
            </div>

            <div className="bg-[#B4BEB9] w-full text-center py-1">
                <span className="text-xs font-light">
                    (C) 2022 PUP The Programmers&apos; Guild All rights reserved
                </span>
            </div>
        </>
    )
}