
import { useContext } from 'react'
import dbConnect from '../../../lib/dbConnect'
import LocationModel from '../../../models/LocationModel'
import styles from '../../../styles/admin/locations/Locations.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'
import Location from '../../../components/Location/Location'
import Button from '../../../components/Button/Button'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'

export default function Locations({ locations }) {
	console.log(locations)
	const { loggedIn, accountType } = useContext(AuthContext)

	function LocationsPage() {
		return (
			<div className={styles.locations}>
				<AdminMenu />
				<h2>Locations</h2>
				<div className={styles.locationList}>
					{
						locations.map(location => {
							return <Location key={location._id} location={location} />
						})
					}
				</div>
				<Button href='/admin/locations/create'>Add Location</Button>
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

export async function getServerSideProps() {
	await dbConnect()

	const result = await LocationModel.find({})
	const locations = result.map(document => {
		const location = document.toObject()
		location._id = location._id.toString()
		return location
	})

	return { props: { locations } }
}