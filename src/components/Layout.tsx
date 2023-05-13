import {
  biko,
  centuryGothic,
  karla,
  neptune,
  optimusPrinceps,
  twCenMt,
} from "@/components/base/fonts";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

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
