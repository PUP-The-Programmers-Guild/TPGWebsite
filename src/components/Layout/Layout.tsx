import { biko, centuryGothic, karla, neptune, optimusPrinceps, twCenMt } from "@/components/base/fonts";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

import Header from "./Header";
const Footer = dynamic(() => import("./Footer"));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${centuryGothic.variable} ${karla.variable} ${neptune.variable} ${biko.variable} ${optimusPrinceps.variable} ${twCenMt.variable}`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
