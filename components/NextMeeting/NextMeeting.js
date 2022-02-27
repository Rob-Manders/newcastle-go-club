
import Link from 'next/link'
import styles from './NextMeeting.module.scss'
import Map from '../Map/Map'
import Button from '../../components/Button/Button'

export default function NextMeeting() {
	return (
		<section className={styles.nextMeeting}>
			<div className={styles.container}>
				<h2>Next Meeting</h2>

				<p className={styles.time}>19:00</p>
				<p className={styles.date}>Thursday 17th February</p>
				<p className={styles.venue}>The Millstone, Gosforth</p>
				<p className={styles.postcode}>NE3 1QL</p>

			</div>

			<div className={styles.mapContainer}>
				<Map mapsApiKey='AIzaSyDELpcbkMle2OUpJwR-vKKLFWh4NRP9Fro' gpsCoord='55.00497071291975,-1.6030312609801245'/>
			</div>
			
			{/* <Link href='/schedule'>View Schedule</Link> */}
			<Button href='/meetings'>View Schedule</Button>
		</section>
	)
}