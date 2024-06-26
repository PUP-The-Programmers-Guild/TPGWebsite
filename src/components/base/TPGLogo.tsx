import Image from "next/image";
import Link from "next/link";

export default function TPGLogo() {
  return (
    <>
      <div className="flex flex-row items-start justify-center gap-x-2">
        <Image src="/TPGLogoLarge.webp" alt="TPG Logo" width="50" height="50" loading="eager" priority />
        <div className="flex w-full justify-between">
          <Link className="flex flex-col leading-5 text-white" href="/">
            <span className="text-xs font-light tracking-[0.04em]">Polytechnic University of the Philippines</span>
            <b className="text-md tracking-normal">THE PROGRAMMERS&apos; GUILD</b>
          </Link>
        </div>
      </div>
    </>
  );
}
