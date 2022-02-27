
import Image from 'next/image'
import styles from './Location.module.scss'

export default function Location() {
	// const { name, area, postcode } = location

	return (
		<div className={styles.location}>
			<div className={styles.locationDetails}>
				<h3>The Millstone</h3>
				<p>South Gosforth</p>
				<p>NE3 1QL</p>
			</div>

			<div className={styles.buttons}>
				<div className={styles.editButton}>
					<Image className={styles.editIcon} src='/icons/edit-icon.svg' layout='fill' />
				</div>

				<div className={styles.deleteButton}>
					<Image className={styles.deleteIcon} src='/icons/delete-icon.svg' layout='fill' />
				</div>
			</div>
		</div>
	)
}