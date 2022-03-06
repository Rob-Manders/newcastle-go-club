
import { useContext } from 'react'
import dbConnect from '../../../lib/dbConnect'
import LocationModel from '../../../models/LocationModel'
import styles from '../../../styles/admin/locations/Locations.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'
import LocationForm from '../../../components/LocationForm/LocationForm'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'

export default function CreateLocation({ location }) {
	const { loggedIn, accountType } = useContext(AuthContext)

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin - Locations' noIndex />
			<DefaultLayout>
				<AdminMenu />
				{loggedIn && accountType === 'admin' && 
					<div className={styles.createLocation}>
						<h2>Add Location</h2>
						<LocationForm editLocation location={location} />
					</div>
				}
			</DefaultLayout>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	await dbConnect()

	const location = await LocationModel.findById(params.id).lean()
	location._id = location._id.toString()

	return { props: { location } }
}