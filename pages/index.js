import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        Hi it's <Link href="posts/first-page">YUBIN!</Link>
        </h1>

        <p className={styles.description}>
          Welcome to Park Yubin's web page~ <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://m.blog.naver.com/dmsaldbqls" className={styles.card}>
            <h3>Everyday thoughts, plans  &rarr;</h3>
            <p>This is my blog, and all my archives come up here </p>
          </a>

          <a href="https://m.blog.naver.com/dmsaldbqls/223405591692" className={styles.card}>
            <h3>ParkYubin_lifetime &rarr;</h3>
            <p>Hanyang University Information department 3rd</p>
          </a>

          <a href="https://www.instagram.com/its_yubin?igsh=OGQ5ZDc2ODk2ZA==" className={styles.card}>
            <h3>SNS &rarr;</h3>
            <p>Instagram - welcome to yubin's daily</p>
          </a>

          <a
            href="https://gihttps://docs.google.com/document/u/0/?ec=asw-docs-hero-gotothub.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Works &rarr;</h3>
            <p>Google doxs - Not yet ready</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}