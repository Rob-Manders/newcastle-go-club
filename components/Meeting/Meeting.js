
import { useRouter } from 'next/router'
import styles from './Meeting.module.scss'
import useParseDate from '../../hooks/useParseDate'
import EditIcon from '../../icons/EditIcon'
import DeleteIcon from '../../icons/DeleteIcon'

export default function Meeting({ meeting, location }) {
	const router = useRouter()
	const parseDate = useParseDate()
	const { _id, date, time } = meeting
	
	async function deleteMeeting() {
		try {
			const response = await fetch('http://localhost:3000/api/meeting', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					meetingId: _id
				})
			})
			const { success, message } = await response.json()
			if (success === true) {
				window.location.reload(false)
			} else {
				console.log(message)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<div className={styles.meeting}>
			<div className={styles.meetingDetails}>
				<h3>{parseDate(date)} {time}</h3>
				<p>{location.name}</p>
			</div>

			<div className={styles.buttons}>
				<EditIcon className={styles.editIcon} action={() => router.push(`/admin/meetings/${_id}`)} />
				<DeleteIcon className={styles.deleteIcon} action={deleteMeeting} />
			</div>
		</div>
	)
}