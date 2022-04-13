
import { useState, useEffect } from 'react'
import styles from './NextMeeting.module.scss'
import useParseDate from '../../hooks/useParseDate'
import Map from '../Map/Map'
import Button from '../../components/Button/Button'

export default function NextMeeting({ hideButton = false, meetings, locations }) {
	const parseDate = useParseDate()
	const [meeting, setMeeting] = useState({})
	const [location, setLocation] = useState({
		name: 'TBC',
		area: 'Newcastle upon Tyne',
		postcode: 'TBC',
		gpsCoord: '54.98226216073709,-1.6170193570421796'
	})
	
	function findLocation(locationId) {
		locations.forEach(location => {
			if (location._id === locationId) {
				setLocation(location)
			}
		})
	}

	function findNextMeeting() {
		meetings.forEach(meeting => {
			meeting.dateObject = new Date(`${meeting.date} ${meeting.time}`)
		})

		let nextMeeting = meetings[0]

		for (let i = 1; i < meetings.length; i++) {
			if (meetings[i].dateObject < nextMeeting.dateObject) {
				nextMeeting = meetings[i]
			}
		}

		setMeeting(nextMeeting)
	}

	useEffect(() => {
		findNextMeeting()
	})

	useEffect(() => {
		findLocation(meeting.locationId)
	}, [meeting])

	return (
		<section className={styles.nextMeeting}>
			<div className={styles.container}>
				<h2>Next Meeting</h2>

				<p className={styles.time}>{meeting.time}</p>
				<p className={styles.date}>{parseDate(meeting.date)}</p>
				<p className={styles.venue}>{location.name}, {location.area}</p>
				<p className={styles.postcode}>{location.postcode}</p>

				{!hideButton && <Button href='/meetings'>View Schedule</Button>}
			</div>

			<div className={styles.mapContainer}>
				<Map gpsCoord={location.gpsCoord}/>
			</div>
			
		</section>
	)
}