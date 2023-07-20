import Link from "next/link";
import { ReactNode } from "react";
import { ILinkProps } from "./NavLink";

const Item = (link: ILinkProps) => {
  return (
    <Link
      className="z-60 group text-xs font-normal leading-none"
      href={link.href}
    >
      <p className="mx-auto border-b border-white py-2 hover:text-green-400 group-last:border-none">
        {link.name}
      </p>
    </Link>
  );
};

export default function NavLinkMenu({ children }: { children: ReactNode[] }) {
  return (
    <div className="absolute left-1/2 top-full z-50 hidden w-28 -translate-x-1/2 break-words bg-neutral-700 px-2.5 text-center text-sm font-semibold leading-tight text-white group-hover:block">
      <div className="group absolute left-1/2 top-[-5px] -z-10 h-5 w-5 -translate-x-1/2 rotate-45 bg-neutral-700" />
      {children}
    </div>
  );
}

NavLinkMenu.Item = Item;
