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
        <title>Kola | Typescript Engineer</title>
        <meta name="description" content="Do it with flair ✨" />
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

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://kxlaa.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kola | Typescript Engineer" />
        <meta property="og:description" content="Do it with flair ✨" />
        <meta
          property="og:image"
          content="https://ucarecdn.com/75a76fba-7bd1-4ef5-b29a-4b9f5d8f5d94/ogimage.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://kxlaa.com/" />
        <meta property="twitter:url" content="https://kxlaa.com/" />
        <meta name="twitter:title" content="Kola | Typescript Engineer" />
        <meta name="twitter:description" content="Do it with flair ✨" />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/75a76fba-7bd1-4ef5-b29a-4b9f5d8f5d94/ogimage.png"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
