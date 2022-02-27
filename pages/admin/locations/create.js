
import { useContext } from 'react'
import Link from 'next/link'
import styles from '../../../styles/admin/locations/Locations.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'
import LocationForm from '../../../components/LocationForm/LocationForm'

export default function CreateLocation() {
	const { loggedIn, accountType } = useContext(AuthContext)

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin - Locations' noIndex />
			<DefaultLayout>
				{loggedIn && accountType === 'admin' && <LocationForm />}
			</DefaultLayout>
		</div>
	)
}