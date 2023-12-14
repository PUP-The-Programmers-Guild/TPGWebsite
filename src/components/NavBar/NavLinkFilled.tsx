import Link from "next/link";
import { ILinkProps } from "./NavLink";

export default function NavLinkFilled(link: ILinkProps) {
  return (
    <li className="nav-item">
      <Link
        className="flex items-center rounded-lg bg-[#DFF2C8] px-9 py-3 text-base font-bold leading-snug text-black"
        href={link.href}
      >
        {link.name}
      </Link>
    </li>
  );
}
