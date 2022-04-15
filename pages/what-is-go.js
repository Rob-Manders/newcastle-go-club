
import styles from '../styles/Home.module.scss'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import DefaultLayout from '../layouts/DefaultLayout'
import Section from '../components/Section/Section'
import Link from 'next/link'

export default function WhatIsGo() {
  return (
    <div className={styles.container}>
      <DocumentHead pageTitle='What is Go?' overrideTitle/>

      <DefaultLayout>
        <Section>
          <h2>What is Go?</h2>
          <p>Go originated in China and is beleived to be over 3,000 years old, and is the oldest coninuously played game in the world. Although more popular in East Asia, is has a loyal following in the west as well.</p>
          <p>The aim of Go is to capture territory by surrounding it with your stones. You can also capture an stones by surrounding them, and though this is not the aim of the game, it can be a good way to capture territory. Whoever holds the most once the game ends is the winner.</p>
          <p>Although the rules are simple, Go is a game of subtle strategy which can take years to master.</p>
          <p>If you have never played Go before, the British Go Association have some excellent resources on their <Link href='https://britgo.org/howtoplaygo'>How to Play Go</Link> pages. You can also pop along to one of our meetings and we would be happy to show you.</p>
        </Section>
      </DefaultLayout>
    </div>
  )
}