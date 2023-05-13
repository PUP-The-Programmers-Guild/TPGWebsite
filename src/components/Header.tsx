import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TPGLogo from "../../public/TPGLogoLarge.png";
import NavLink from "./NavBar/NavLink";
import NavLinkFilled from "./NavBar/NavLinkFilled";

const NAVLINKS = [
  {
    name: "Home",
    href: "/",
    sublinks: [],
  },
  {
    name: "About Us",
    href: "/about",
    sublinks: [
      { name: "Description and Brief History", href: "/about" },
      { name: "Mission and Values", href: "/about#mission" },
      { name: "People", href: "/about#people" },
    ],
  },
  {
    name: "News",
    href: "/news",
    sublinks: [
      { name: "Latest Announcement/News", href: "" },
      { name: "Latest/Past Events", href: "" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
    sublinks: [
      { name: "Social Media and Emails", href: "/#contact" },
      { name: "Frequently Asked Questions", href: "/#faq" },
      { name: "Get in Touch Form", href: "/#touch" },
    ],
  },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navMenuDisplay = isNavOpen ? "flex" : "hidden";

  return (
    <header className="relative flex h-16 flex-wrap items-center justify-between bg-neutral-500">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-12">
        <Image src={TPGLogo} alt="TPG Logo" width="50" height="50" />
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Link className="py-2 text-sm font-bold text-white" href="/">
            The
            <br /> Programmers' Guild
          </Link>
          {/* <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
              <i className="fas fa-bars"></i>
          </button> */}
        </div>
        <nav
          className={`${navMenuDisplay} flex-grow items-center lg:flex`}
          id="NavBar"
        >
          <ul className="flex flex-col gap-6 lg:ml-auto lg:flex-row">
            {NAVLINKS.map((link) => (
              <NavLink key={`NAVLINK-${link.name}`} {...link} />
            ))}
            <NavLinkFilled name="Be a Devskolar" href="/register" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
