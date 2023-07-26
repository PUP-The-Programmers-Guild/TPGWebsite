import Link from "next/link";
import { ILinkProps } from "./NavLink";

export default function NavLinkFilled(link: ILinkProps) {
  return (
    <li className="nav-item">
      <Link
        className="group relative flex items-center rounded-lg bg-white bg-opacity-40 px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:bg-[#5C6D62] hover:bg-opacity-100"
        href={link.href}
      >
        {link.name}
      </Link>
    </li>
  );
}
