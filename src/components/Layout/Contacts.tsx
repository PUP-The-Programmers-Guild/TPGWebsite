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
    <section className="flex justify-center bg-[#F5FBED] text-[#052014] ">
      <div className="flex max-w-[960px] grow flex-row justify-between py-20">
        <div className="inlne-flex basis-[400px] flex-col">
          <h2 className="mb-4 text-4xl font-bold">Let&apos;s Talk</h2>
          <p className="mb-11 text-base ">Have questions? Reach out and let&apos;s chat.</p>
          <button className=" bg-[#052014] px-9 py-3 text-[#F5FBED]">
            <span className="px-[25px] font-body text-base font-bold">Send a Message</span>
          </button>
        </div>
        <div className="flex grow-0 basis-[400px] flex-col">
          <h2 className="mb-4 text-4xl font-bold leading-[39.6px]">Stay Connected</h2>
          <p className="mb-11 text-base ">Find us online to see our community in action.</p>
          <div className="flex space-x-[22px]">
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
