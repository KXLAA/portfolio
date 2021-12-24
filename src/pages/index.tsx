import Head from 'next/head';
import Layout from 'components/common/Layout';
import Header from 'components/home/Header';
import TechStack from 'components/home/TechStack';
import Projects from 'components/home/Projects';
import Footer from 'components/home/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Header />
          <TechStack />
          <Projects />
          <Footer />
        </Layout>
      </main>
    </>
  );
}
