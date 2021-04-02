import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Fade from 'react-reveal';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Fade>
          {' '}
          <section className={styles.intro}>
            <img src='/avatar.jpg' className={styles.avatar} />
            <span className={styles.name}>White Wolf</span>
          </section>
        </Fade>

        <Fade>
          <h1 className={styles.title}>UI-X Designer + Developer</h1>

          <p className={styles.description}>
            Use this space to introduce yourself, and maybe share a few links to
            your work, or your Twitter profile. Duplicate this template for free
            from the Super Market. See instructions here.
          </p>
        </Fade>
        <Fade up>
          <button className={styles.button}>Get In Touch</button>
        </Fade>
      </main>
    </div>
  );
}
