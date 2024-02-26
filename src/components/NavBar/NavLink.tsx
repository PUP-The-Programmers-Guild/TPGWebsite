import Link from "next/link";

export interface ILinkProps {
  name: string;
  href: string;
}

export default function NavLink(navlink: ILinkProps) {
  return (
    <li className="flex  items-center py-2 text-base leading-snug text-white hover:text-green-400 hover:shadow-black hover:drop-shadow-lg">
      <Link href={navlink.href} className="font-light">
        {navlink.name}
      </Link>
    </li>
  );
}
