import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Contacts() {
  const SocialMediaLinks = [
    {
      link: process.env.NEXT_PUBLIC_LINK_FB,
      Icon: FacebookLogo,
    },
    {
      link: process.env.NEXT_PUBLIC_LINK_INSTAGRAM,
      Icon: InstagramLogo,
    },
    {
      link: process.env.NEXT_PUBLIC_LINK_YOUTUBE,
      Icon: YoutubeLogo,
    },
    {
      link: process.env.NEXT_PUBLIC_LINK_LINKEDIN,
      Icon: LinkedinLogo,
    },
    {
      link: process.env.NEXT_PUBLIC_LINK_TWITTER,
      Icon: TwitterLogo,
    },
    {
      link: process.env.NEXT_PUBLIC_LINK_GITHUB,
      Icon: GithubLogo,
    },
  ];

  return (
    <section
      className=" text-white"
      style={{
        background:
          "radial-gradient(100% 418.39% at 100% 100%, #343534 0%, #1E5C3F 33.33%, #409C49 66.67%, #FFEC5C 100%)",
      }}
    >
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
            {SocialMediaLinks.map(({ link, Icon }) => (
              <a key={link} href={link} target="_blank" rel="noreferrer">
                <Icon color="#f8fafc" size={35} weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
