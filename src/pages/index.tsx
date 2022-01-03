import Head from 'next/head';
import Layout from 'components/common/Layout';
import About from 'components/home/About';
import Techstack from 'components/home/Techstack';
import Projects from 'components/home/Projects';
import Contact from 'components/home/Contact';

export default function Home() {
  return (
    <>
      <Layout>
        <About />
        <Techstack />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
