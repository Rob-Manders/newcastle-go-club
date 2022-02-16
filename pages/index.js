
import styles from '../styles/Home.module.scss'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <DocumentHead pageTitle='Home' overrideTitle/>

      <Nav page='home'/>

      <img className={styles.mainImage} src='images/goclub1.jpg' />

      <main className={styles.main}>
        
      </main>

      <Footer />
    </div>
  )
}
