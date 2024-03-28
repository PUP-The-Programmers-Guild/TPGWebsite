import Contacts from "./Contacts";
import TPGLogo from "../base/TPGLogo";
import Link from "next/link";

type Subsection = {
  title: string;
  path: string;
};

type Page = {
  title: string;
  path: string;
};

type FooterDirectoryItem = {
  page: Page;
  subsections: Subsection[];
};

const FOOTER_DIRECTORY: FooterDirectoryItem[] = [
  {
    page: {
      title: "Home",
      path: "/",
    },
    subsections: [
      {
        title: "FAQs",
        path: "/#faqs",
      },
    ],
  },
  {
    page: {
      title: "Projects",
      path: "/events",
    },
    subsections: [
      {
        title: "Events",
        path: "/events",
      },
    ],
  },
  {
    page: {
      title: "About",
      path: "/about",
    },
    subsections: [
      {
        title: "Mission",
        path: "/about#missionvision",
      },
      {
        title: "Vision",
        path: "/about#missionvision",
      },
      {
        title: "Community",
        path: "/about#community",
      },
    ],
  },
  {
    page: {
      title: "Be a Devskolar",
      path: "/register",
    },
    subsections: [
      {
        title: "Benefits",
        path: "/register#benefits",
      },
      {
        title: "Application Process",
        path: "/register#process",
      },
      {
        title: "Requirements",
        path: "/register#requirements",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="">
      <Contacts />
      <div className="flex grow-0 flex-row justify-center border-0 bg-[#052014] py-10 text-white">
        <div className="flex max-w-[960px] grow flex-row justify-between">
          <TPGLogo />
          <div className="flex grow-0 flex-row gap-x-12">
            {FOOTER_DIRECTORY.map((item: FooterDirectoryItem) => (
              <div key={`${item.page.title}-directory`} className="flex flex-col gap-y-4">
                <Link className="p-[10px] font-semibold" href={item.page.path}>
                  {item.page.title}
                </Link>
                {item.subsections.map((subsection: Subsection) => (
                  <Link
                    key={`${subsection.title}-subdirectory`}
                    className="p-[10px] text-sm"
                    href={subsection.path}
                    scroll={!/\#/.test(subsection.path)}
                  >
                    {subsection.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-[6px] border-0 bg-[#052014] pb-10 pt-4 text-xs text-white">
        <span>PUP - THE PROGRAMMERS’ GUILD</span>
        <span>All Rights Reserved © 2023</span>
      </div>
    </footer>
  );
}
