
import styles from './Meeting.module.scss'
import useParseDate from '../../hooks/useParseDate'

export default function Meeting({ meeting, location }) {
	const parseDate = useParseDate()
	const { _id, date, time } = meeting

	return (
		<div className={styles.meeting}>
			<div className={styles.dateTime}>
				<p className={styles.time}>{time}</p>
				<h3>{parseDate(date)}</h3>
			</div>
			<div className={styles.location}>
				<p>{location.name}</p>
				<p>{location.area}</p>
				<p>{location.postcode}</p>
			</div>
		</div>
	)
}