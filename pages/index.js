import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello! My name is Francine D. Zapata.</p>
        <p>My hobby is watching movies, especislly during my free time. I also enjoy listening to music, and one of my favorite song is "What If I Call" by Alex Crichton. My favorite food is Takoyaki. In five years, I see myself having a successful career, becoming independent, and achieving my goals.</p>
      </section>
    </Layout>
  );
}