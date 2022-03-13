
import { useContext } from 'react'
import styles from '../../../styles/admin/meetings/Meetings.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'
import AdminMenu from '../../../components/AdminMenu/AdminMenu'
import Meeting from '../../../components/Meeting/Meeting'
import dbConnect from '../../../lib/dbConnect'
import MeetingModel from '../../../models/MeetingModel'
import LocationModel from '../../../models/LocationModel'
import Button from '../../../components/Button/Button'

export default function Meetings({ meetings, locations }) {
	const { loggedIn, accountType } = useContext(AuthContext)

	function MeetingsPage() {
		return (
			<div className={styles.meetings}>
				<AdminMenu />
				<h2>Meetings</h2>
				<div className={styles.meetingList}>
					{
						meetings.map(meeting => {
							let meetingLocation = {}

							locations.forEach(location => {
								if (location._id === meeting.locationId) {
									meetingLocation = location
								}
							})
							return (
								<Meeting key={meeting._id} meeting={meeting} location={meetingLocation} />
							)
						})
					}
				</div>
				<Button href='/admin/meetings/create'>Add Meeting</Button>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin - Meetings' noIndex />
			<DefaultLayout>
				{loggedIn && accountType === 'admin' && <MeetingsPage />}
			</DefaultLayout>
		</div>
	)
}

export async function getServerSideProps() {
	await dbConnect()

	const meetingsResult = await MeetingModel.find({})
	const meetings = meetingsResult.map(document => {
		const meeting = document.toObject()
		meeting._id = meeting._id.toString()
		return meeting
	})

	const locationsResult = await LocationModel.find({})
	const locations = locationsResult.map(document => {
		const location = document.toObject()
		location._id = location._id.toString()
		return location
	})

	return { props: { meetings, locations } }
}
