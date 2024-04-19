import NavLink from "./NavBar/NavLink";
import NavLinkFilled from "./NavBar/NavLinkFilled";
import TPGLogo from "../base/TPGLogo";

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
    href: "/events",
  },
];

export default function Header() {
  // For mobile-responsive navbar state
  //const [isNavOpen, setIsNavOpen] = useState(false);
  //const navMenuDisplay = isNavOpen ? "flex" : "hidden";

  return (
    <header className="flex flex-wrap items-center justify-center bg-[#052014]">
      <div className="container flex max-w-[960px] flex-wrap items-center justify-between py-4">
        <TPGLogo />
        <nav className={`flex items-center`} id="NavBar">
          <ul className="flex flex-row items-center gap-12 text-base">
            {NAVLINKS.map((link) => (
              <NavLink key={`NAVLINK-${link.name}`} {...link} />
            ))}
            <NavLinkFilled
              name="Be a Devskolar"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoxZzw_YY1hV_A7d-Ped2G6zYYdClZL5fvhz2bhDuyT8FzIQ/viewform"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
