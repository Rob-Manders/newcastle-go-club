import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav/Nav'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Newcastle Go Club</title>
        <meta name="description" content="A group of like-minded, supportive Go players of all skill levels based in Newcastle upon Tyne." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <header>
        
      </header>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
