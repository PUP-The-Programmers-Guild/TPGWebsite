import Link from "next/link";
import NavLinkMenu from "./NavLinkMenu";

export interface ILinkProps {
  name: string;
  href: string;
}

interface INavLinkProps extends ILinkProps {
  sublinks: ILinkProps[];
}

export default function NavLink(navlink: INavLinkProps) {
  return (
    <li className="group relative flex items-center py-2 text-xs leading-snug text-white hover:text-green-400 hover:shadow-black hover:drop-shadow-lg">
      <Link href={navlink.href} className="font-bold">
        {navlink.name}
      </Link>
      {navlink.sublinks.length > 0 && (
        <NavLinkMenu>
          {navlink.sublinks.map((item, index) => (
            <NavLinkMenu.Item key={index} {...item} />
          ))}
        </NavLinkMenu>
      )}
    </li>
  );
}
