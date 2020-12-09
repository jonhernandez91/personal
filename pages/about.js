import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.About}>
      <Head>
        <title>My About</title>
        {/* SITE FAVICON */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐒</text></svg>"
        />
      </Head>

      <main>
        <h1 className={styles['About-title']}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
