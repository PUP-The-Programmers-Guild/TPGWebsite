import Link from "next/link";
import { ILinkProps } from "./NavLink";

export default function NavLinkFilled(link: ILinkProps) {
  return (
    <li className="nav-item">
      <Link
        className="flex items-center bg-white px-[35px] py-3 text-base font-bold leading-snug text-black hover:bg-[#DFF2C8]"
        href={link.href}
        target="_blank"
      >
        {link.name}
      </Link>
    </li>
  );
}
