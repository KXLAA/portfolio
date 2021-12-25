import Head from 'next/head';
import Layout from 'components/common/Layout';
import About from 'components/home/About';
import Techstack from 'components/home/Techstack';
import Projects from 'components/home/Projects';
import Contact from 'components/home/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kola</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <About />
        <Techstack />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
