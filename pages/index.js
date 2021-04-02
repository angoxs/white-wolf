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
            <img src='/avatar.JPG' className={styles.avatar} />
            <span className={styles.name}>White Wolf</span>
          </section>
        </Fade>

        <Fade>
          <h1 className={styles.title}>UI-X Designer + Developer</h1>

          <p className={styles.description}>
            A pseudo-Latin text used in web design, layout, and printing in
            place of things to emphasise layouts for previewing layouts and
            visual mockups.
          </p>
        </Fade>
        <Fade up>
          <button className={styles.button}>Get In Touch</button>
        </Fade>
      </main>
    </div>
  );
}
