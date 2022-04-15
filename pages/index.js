
import styles from '../styles/Home.module.scss'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import DefaultLayout from '../layouts/DefaultLayout'
import NextMeeting from '../components/NextMeeting/NextMeeting'
import WelcomeSection from '../components/WelcomeSection/WelcomeSection'
import Divider from '../components/Divider/Divider'
import dbConnect from '../lib/dbConnect'
import MeetingModel from '../models/MeetingModel'
import LocationModel from '../models/LocationModel'

export default function Home({ meetings, locations }) {
  return (
		<div className={styles.container}>
      <DocumentHead pageTitle='Home' />

      <DefaultLayout>
				<WelcomeSection />
				<Divider />
        <NextMeeting meetings={meetings} locations={locations} />
      </DefaultLayout>
    </div>
  )
}

export async function getServerSideProps() {
	await dbConnect()

	const meetingsResult = await MeetingModel.find({}, 'date time locationId')
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