import Container from '@/components/Container';
import Head from 'next/head';
import type {AppProps} from 'next/app'
import "../styles/globals.css";
import {centuryGothic, karla, neptune, biko, optimusPrinceps, twCenMt} from "@/components/base/fonts";

export default function App({Component, pageProps}: AppProps) {
  return (
    <main
      className={`${centuryGothic.variable} ${karla.variable} ${neptune.variable} 
                  ${biko.variable} ${optimusPrinceps.variable} ${twCenMt.variable}`}
    >
      <Head>
        <title>TPG | The Programmers' Guild</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </main>
  )
}
