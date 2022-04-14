
import styles from './Meeting.module.scss'
import useParseDate from '../../hooks/useParseDate'

export default function Meeting({ meeting, location }) {
	const parseDate = useParseDate()
	const { _id, date, time } = meeting

	return (
		<div className={styles.meeting}>
			<div className={styles.dateTime}>
				<p className={styles.time}>{time}</p>
				<h3 className={styles.date}>{parseDate(date)}</h3>
			</div>
			<div className={styles.location}>
				<p className={styles.venue}>{location.name}</p>
				<p className={styles.area}>{location.area}</p>
				<p className={styles.postcode}>{location.postcode}</p>
			</div>
		</div>
	)
}