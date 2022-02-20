
import { useContext } from 'react'
import Link from 'next/link'
import styles from '../../../styles/admin/locations/Locations.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'

export default function Locations() {
	const { loggedIn, accountType } = useContext(AuthContext)

	function LocationsPage() {
		return (
			<div className={styles.locations}>
				<Link href='/admin'>Admin</Link>
				Locations
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin - Locations' noIndex />
			<DefaultLayout>
				{loggedIn && accountType === 'admin' && <LocationsPage />}
			</DefaultLayout>
		</div>
	)
}