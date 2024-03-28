import { SmileyXEyes } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotfoundNotice() {
  return (
    <div className="bg--[#052014] flex h-screen flex-col items-center justify-center gap-y-2 bg-[#F5FBED] text-[#052014]">
      <SmileyXEyes size={256} color="#052014" />
      <h1 className="text text--[#F5FBED] text-4xl font-bold ">404 Error: Page Not Found!</h1>
      <span className="text-center">
        We couldn&apos;t locate the page you requested. <br /> It might be under development by our tech wizards or the
        URL might have a typo.
      </span>
      <Link href="/">
        <button className=" mt-8 bg-[#052014] px-9 py-3 text-[#F5FBED]">
          <span className="px-[25px] font-body text-base font-bold">Go back to homepage.</span>
        </button>
      </Link>
    </div>
  );
}
