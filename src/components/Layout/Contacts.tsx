import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

export default function Contacts() {
  const SocialMediaLinks = [
    {
      link: `https://www.facebook.com/PUPTPG`,
      Icon: FacebookLogo,
      ariaLabel: "External Link to The Programmers' Guild's Facebook Page",
    },
    {
      link: `https://www.instagram.com/theprogrammersguild`,
      Icon: InstagramLogo,
      ariaLabel: "External Link to The Programmers' Guild's Instagram Page",
    },
    {
      link: `https://youtube.com/@puptheprogrammersguild`,
      Icon: YoutubeLogo,
      ariaLabel: "External Link to The Programmers' Guild's Youtube Page",
    },
    {
      link: `https://www.linkedin.com/company/the-programmers-guild`,
      Icon: LinkedinLogo,
      ariaLabel: "External Link to The Programmers' Guild's LinkedIn Page",
    },
    {
      link: `https://x.com/pup_tpg`,
      Icon: TwitterLogo,
      ariaLabel: "External Link to The Programmers' Guild's Twitter Page",
    },
    {
      link: `https://github.com/PUP-The-Programmers-Guild`,
      Icon: GithubLogo,
      ariaLabel: "External Link to The Programmers' Guild's Github Page",
    },
  ];

  return (
    <section className="flex justify-center bg-[#F5FBED] text-[#052014] ">
      <div className="flex max-w-[960px] grow flex-row justify-between py-20">
        <div className="inlne-flex basis-[400px] flex-col">
          <h2 className="mb-4 text-4xl font-bold">Let&apos;s Talk</h2>
          <p className="mb-11 text-base ">Have questions? Reach out and let&apos;s chat.</p>
          <a href="mailto:puptpg@gmail.com">
            <button className=" bg-[#052014] px-9 py-3 text-[#F5FBED]">
              <span className="px-[25px] font-body text-base font-bold">Send a Message</span>
            </button>
          </a>
        </div>
        <div className="flex grow-0 basis-[400px] flex-col">
          <h2 className="mb-4 text-4xl font-bold leading-[39.6px]">Stay Connected</h2>
          <p className="mb-11 text-base ">Find us online to see our community in action.</p>
          <div className="flex space-x-[22px]">
            {SocialMediaLinks.map(({ link, Icon, ariaLabel }, index) => (
              <a key={index} href={link} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
                <Icon color="#052014" size={45} weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
