
import { useContext } from 'react'
import dbConnect from '../../../lib/dbConnect'
import MeetingModel from '../../../models/MeetingModel'
import LocationModel from '../../../models/LocationModel'
import styles from '../../../styles/admin/meetings/Meetings.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'
import MeetingForm from '../../../components/MeetingForm/MeetingForm'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'

export default function CreateMeeting({ meeting, locations }) {
	const { loggedIn, accountType } = useContext(AuthContext)

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin - Meetings' noIndex />
			<DefaultLayout>
				<AdminMenu />
				{loggedIn && accountType === 'admin' && 
					<div className={styles.createMeeting}>
						<h2>Add Meeting</h2>
						<MeetingForm editMeeting meeting={meeting} locations={locations} />
					</div>
				}
			</DefaultLayout>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	await dbConnect()

	const meeting = await MeetingModel.findById(params.id, 'date time locationId').lean()
	meeting._id = meeting._id.toString()

	const result = await LocationModel.find({})
	const locations = result.map(document => {
		const location = document.toObject()
		location._id = location._id.toString()
		return location
	})

	return { props: { meeting, locations } }
}