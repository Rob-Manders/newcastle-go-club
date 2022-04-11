
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import DefaultLayout from '../layouts/DefaultLayout'
import Section from '../components/Section/Section'

export default function Contact() {
  return (
    <div className={styles.container}>
      <DocumentHead pageTitle='Contact' overrideTitle/>

      <DefaultLayout>
        <Section>
          <h2>Contact Us</h2>
          <p>If you would like to know more about the club, or have any other enquries, we would be happy to answer any questions you may have.</p>
          <p>You can contact us via our <Link href='https://www.facebook.com/NewcastleGoClub'>Facebook page</Link>, or email Tom Coulthard at <Link href='mailto:tomcoulthard@nhs.net'>tomcoulthard@nhs.net</Link>.</p>
          <p>You can also pop along to any of our meetings if you wish to speak to us face-to-face.</p>
        </Section>
      </DefaultLayout>
    </div>
  )
}
