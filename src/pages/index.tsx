import Layout from 'components/common/Layout';
import About from 'components/home/About';
import Projects from 'components/home/Projects';
import Contact from 'components/home/Contact';
import Stack from 'components/home/Stack';

export default function Home() {
  return (
    <>
      <Layout>
        <About />
        <Stack />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
