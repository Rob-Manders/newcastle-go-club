
import styles from './WelcomeSection.module.scss'
import Image from 'next/image'

export default function WelcomeSection() {
	return (
		<section className={styles.welcomeSection} aria-label='welcome'>
			<div className={styles.mainImage}>
        <Image src='/images/goclub1.jpg' layout='fill' objectFit='cover' priority />
      </div>

			<div className={styles.welcomeText}>
				<p className={styles.subHeader}>Welcome to</p>
				<h2>Newcastle Go Club</h2>

				<p>We are a group of like-minded people who love to play the amazing game of Go.</p>
				<p>We are an inclusive group, open to all players, new or old.</p>
				<p>You can see below where and when we will next be meeting, so feel free to come along.</p>
			</div>
		</section>
	)
}