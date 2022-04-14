
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import DocumentHead from '../components/DocumentHead/DocumentHead'
import DefaultLayout from '../layouts/DefaultLayout'
import NextMeeting from '../components/NextMeeting/NextMeeting'
import Section from '../components/Section/Section'
import Meeting from '../components/Meeting/Meeting'
import dbConnect from '../lib/dbConnect'
import MeetingModel from '../models/MeetingModel'
import LocationModel from '../models/LocationModel'

export default function Meetings({ meetings, locations }) {

	function sortMeetings() {
		meetings.forEach(meeting => {
			meeting.dateObject = new Date(`${meeting.date} ${meeting.time}`)
		})

		meetings.sort((a, b) => {
			if (a.dateObject < b.dateObject) return -1
			if (a.dateObject > b.dateObject) return 1
			return 0
		})
	}

	useEffect(() => sortMeetings(), [])

  return (
    <div className={styles.container}>
      <DocumentHead pageTitle='Meetings' overrideTitle/>
      <DefaultLayout>
        <NextMeeting hideButton meetings={meetings} locations={locations} />
        <Section>
          <h2>Upcoming Meetings</h2>
          {
						meetings.map((meeting, index) => {
							let meetingLocation = {}

							locations.forEach(location => {
								if (location._id === meeting.locationId) {
									meetingLocation = location
								}
							})

							if (index > 0) return (
								<Meeting key={meeting._id} meeting={meeting} location={meetingLocation} />
							)
						})
					}
        </Section>
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