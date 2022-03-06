
import { Router, useRouter } from 'next/router'
import styles from './Location.module.scss'
import EditIcon from '../../icons/EditIcon'
import DeleteIcon from '../../icons/DeleteIcon'

export default function Location({ location }) {
	const router = useRouter()
	const { _id, name, area, postcode } = location

	async function deleteLocation() {
		try {
			const response = await fetch('http://localhost:3000/api/location', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					locationId: _id
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

	return (
		<div className={styles.location}>
			<div className={styles.locationDetails}>
				<h3>{name}</h3>
				<p>{area}</p>
				<p>{postcode}</p>
			</div>

			<div className={styles.buttons}>
				<EditIcon className={styles.editIcon} action={() => router.push(`/admin/locations/${_id}`)}/>
				<DeleteIcon className={styles.deleteIcon} action={deleteLocation} />
			</div>
		</div>
	)
}