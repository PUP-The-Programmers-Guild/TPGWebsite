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
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Events",
    href: "/news/events",
  },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navMenuDisplay = isNavOpen ? "flex" : "hidden";

  return (
    <header className="flex flex-wrap items-center justify-center bg-[#052014]">
      <div className="container mx-60 flex flex-wrap items-center justify-between py-4">
        <div className="flex flex-row gap-x-2">
          <Image src={TPGLogo} alt="TPG Logo" width="50" height="50" />
          <div className="flex w-full justify-between">
            <Link className="flex flex-col leading-5 text-white" href="/">
              <span className="text-xs font-light tracking-[0.04em]">Polytechnic University of the Philippines</span>
              <b className="text-md tracking-normal">THE PROGRAMMERS&apos; GUILD</b>
            </Link>
          </div>
        </div>
        <nav className={`flex items-center`} id="NavBar">
          <ul className="flex flex-row items-center gap-12">
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
