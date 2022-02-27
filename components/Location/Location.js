
import Image from 'next/image'
import styles from './Location.module.scss'
import EditIcon from '../../icons/EditIcon'
import DeleteIcon from '../../icons/DeleteIcon'

export default function Location({ location }) {
	const { name, area, postcode } = location

	return (
		<div className={styles.location}>
			<div className={styles.locationDetails}>
				<h3>{name}</h3>
				<p>{area}</p>
				<p>{postcode}</p>
			</div>

			<div className={styles.buttons}>
				<EditIcon className={styles.editIcon} />
				<DeleteIcon className={styles.deleteIcon} />
			</div>
		</div>
	)
}