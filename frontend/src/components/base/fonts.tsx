import localFont from "@next/font/local";

const karla = localFont({
  src: [
    {
      path: "../../../public/fonts/karla/Karla-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/karla/Karla-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/karla/Karla-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/karla/Karla-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-karla",
});

const centuryGothic = localFont({
  src: [
    {
      path: "../../../public/fonts/century-gothic/CenturyGothic-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/century-gothic/CenturyGothic-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/century-gothic/CenturyGothic-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/century-gothic/CenturyGothic-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-centuryGothic",
});

const neptune = localFont({
  src: [
    {
      path: "../../../public/fonts/neptune/Neptune-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neptune",
});

const optimusPrinceps = localFont({
  src: [
    {
      path: "../../../public/fonts/optimus-princeps/OptimusPrinceps-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/optimus-princeps/OptimusPrinceps-Semibold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-optimusPrinceps",
});

const biko = localFont({
  src: [
    {
      path: "../../../public/fonts/biko/Biko-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/biko/Biko-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/biko/Biko-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/biko/Biko-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-biko",
});

const twCenMt = localFont({
  src: [
    {
      path: "../../../public/fonts/tw-cen-mt/Twcenmt-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/tw-cen-mt/Twcenmt-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/tw-cen-mt/Twcenmt-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/tw-cen-mt/Twcenmt-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/tw-cen-mt/Twcenmt-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-twCenMt",
});

export { karla, centuryGothic, neptune, biko, optimusPrinceps, twCenMt };
