import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

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
    <section className=" bg-[#F5FBED] text-[#052014]">
      <div className="mx-auto flex max-w-screen-xl gap-10 px-9 py-20 pl-16">
        <div className="w-1/2">
          <h2 className="mb-4 text-4xl font-bold">Let&apos;s Talk</h2>
          <p className="mb-11 text-base">Have questions? Reach out and let&apos;s chat.</p>
          <button className=" bg-[#052014] p-3 text-[#F5FBED]">
            <span className="px-[25px] font-body text-base font-bold">Send a Message</span>
          </button>
        </div>
        <div className="w-1/2 pl-20">
          <h2 className="mb-4 text-4xl font-bold">Stay Connected</h2>
          <p className="mb-7 text-base ">Find us online to see our community in action.</p>
          <div className="flex space-x-4">
            {SocialMediaLinks.map(({ link, Icon }, index) => (
              <a key={index} href={link} target="_blank" rel="noreferrer">
                <Icon color="#052014" size={45} weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
