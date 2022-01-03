import Layout from '../../components/common/Layout';
import About from '../../components/home/About';
import Projects from '../../components/home/Projects';
import Contact from '../../components/home/Contact';
import { Techstack } from '../../components/home/Techstack';

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
