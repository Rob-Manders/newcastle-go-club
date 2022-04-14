
import styles from '../styles/Home.module.scss'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import DefaultLayout from '../layouts/DefaultLayout'
import Section from '../components/Section/Section'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <DocumentHead pageTitle='About Us' overrideTitle/>

      <DefaultLayout>
        <Section>
          <h2>About Us Us</h2>
          <p>Newcastle Go Club are an inclusive group of Go players of all skills levels, and we welcome anyone regardless of if you've been playing for years or never played at all.</p>
          <p>We typically meet every Thursday, but for more information on where and when our upcoming meetings will be you can look at the <Link href='/meetings'>meetings page</Link>.</p>
          <p>If you'd like to know more, you can contact us via our <Link href='https://www.facebook.com/NewcastleGoClub'>Facebook page</Link>, or email Tom Coulthard at <Link href='mailto:tomcoulthard@nhs.net'>tomcoulthard@nhs.net</Link>.</p>
        </Section>
      </DefaultLayout>
    </div>
  )
}