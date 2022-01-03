import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    
  }
  body {
    line-height: 1.4;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #101010;
    color: #d4d4d4;

  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kola | Front-End Developer</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#101010" />
        <meta name="msapplication-TileColor" content="#101010" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
