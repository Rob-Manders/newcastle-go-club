
import { useContext } from 'react'
import styles from '../../../styles/admin/locations/Locations.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'
import LocationForm from '../../../components/LocationForm/LocationForm'

export default function CreateLocation() {
	const { loggedIn, accountType } = useContext(AuthContext)

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin - Locations' noIndex />
			<DefaultLayout>
				<AdminMenu />
				{loggedIn && accountType === 'admin' && 
					<div className={styles.createLocation}>
						<h2>Add Location</h2>
						<LocationForm />
					</div>
				}
			</DefaultLayout>
		</div>
	)
}