import Container from '@/components/Container';
import type { AppProps } from 'next/app'
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}