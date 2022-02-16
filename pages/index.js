
import styles from '../styles/Home.module.scss'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import NextMeeting from '../components/NextMeeting/NextMeeting'

export default function Home() {
  return (
    <div className={styles.container}>
      <DocumentHead pageTitle='Home' overrideTitle/>

      <Nav page='home'/>


      <main className={styles.main}>
        <img className={styles.mainImage} src='images/goclub1.jpg' />
        <NextMeeting />
      </main>

      <Footer />
    </div>
  )
}
