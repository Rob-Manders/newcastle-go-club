
import { useRouter } from 'next/router'
import styles from './Meeting.module.scss'
import EditIcon from '../../icons/EditIcon'
import DeleteIcon from '../../icons/DeleteIcon'

export default function Meeting({ meeting, location }) {
	const router = useRouter()
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
			const { success } = await response.json()
			if (success === true) {
				window.location.reload(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<div className={styles.meeting}>
			<div className={styles.meetingDetails}>
				<h3>{date} / {time}</h3>
				<p>{location.name}</p>
			</div>

			<div className={styles.buttons}>
				<EditIcon className={styles.editIcon} action={() => router.push(`/admin/meetings`)} />
				<DeleteIcon className={styles.deleteIcon} action={deleteMeeting} />
			</div>
		</div>
	)
}