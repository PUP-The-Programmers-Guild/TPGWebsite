import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Contacts() {
  return (
    <div className="mx-auto flex max-w-screen-xl gap-10 px-9 py-20 pl-16">
      <div className="w-1/2">
        <h2 className="mb-4 text-6xl font-bold">Let's Work Together</h2>
        <p className="mb-11 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className=" bg-white p-3">
          <span className="font-body text-[1rem] font-bold uppercase text-[#1E1E1E]">
            Send a message
          </span>
        </button>
      </div>
      <div className="w-1/2 pl-20">
        <h2 className="mb-4 text-6xl font-bold">Stay Updated</h2>
        <p className="mb-7 text-xl ">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
        <div className="flex space-x-4">
          <a
            href={process.env.NEXT_PUBLIC_LINK_FB}
            target="_blank"
            rel="noreferrer"
          >
            <FacebookLogo color="#f8fafc" size={35} weight="fill" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo color="#f8fafc" size={35} weight="fill" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINK_YOUTUBE}
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeLogo color="#f8fafc" size={35} weight="fill" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINK_LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo color="#f8fafc" size={35} weight="fill" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINK_TWITTER}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo color="#f8fafc" size={35} weight="fill" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINK_GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo color="#f8fafc" size={35} weight="fill" />
          </a>
        </div>
      </div>
    </div>
  );
}
