
import styles from './AdminMenu.module.scss'
import Link from 'next/link'

export default function AdminMenu() {
	return (
		<div className={styles.adminMenu}>
			<Link href='/admin'>Admin Home</Link>
			<Link href='/admin/meetings'>Meetings</Link>
			<Link href='/admin/locations'>Locations</Link>
		</div>
	)
}