
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import DefaultLayout from '../layouts/DefaultLayout'
import NextMeeting from '../components/NextMeeting/NextMeeting'

export default function Home() {
  return (
    <div className={styles.container}>
      <DocumentHead pageTitle='Home' />

      <DefaultLayout>
        <div className={styles.mainImage}>
          <Image src='/images/goclub1.jpg' layout='fill' objectFit='cover' priority />
        </div>
        <NextMeeting />
      </DefaultLayout>

    </div>
  )
}
