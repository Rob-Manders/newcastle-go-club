
import Link from 'next/link'
import styles from './NextMeeting.module.scss'
export default function NextMeeting() {
	return (
		<section className={styles.nextMeeting}>
			<h2>Next Meeting</h2>

			<p className={styles.time}>19:00</p>
			<p className={styles.date}>Thursday 17th February</p>
			<p className={styles.venue}>The Millstone, Gosforth</p>
			<p className={styles.postcode}>NE3 1QL</p>

			<Link href='/schedule'>View Schedule</Link>
		</section>
	)
}