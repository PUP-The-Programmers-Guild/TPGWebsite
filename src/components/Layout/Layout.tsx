/* import { biko, centuryGothic, karla, neptune, optimusPrinceps, twCenMt } from "@/components/base/fonts"; */
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

import Header from "./Header";
const Footer = dynamic(() => import("./Footer"));

export default function Layout({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        /* `${centuryGothic.variable} ${karla.variable} ${neptune.variable} ${biko.variable} ${optimusPrinceps.variable} ${twCenMt.variable}` ,*/
        `${className}`
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
