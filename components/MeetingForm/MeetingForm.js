
import { useState } from 'react'
import styles from './MeetingForm.module.scss'

const defaultMeeting = {
	_id: null,
	date: null,
	time: null,
	locationId: null,
}

export default function MeetingForm({ locations, editMeeting = false, meeting = defaultMeeting }) {
	const [date, setDate] = useState(meeting.date)
	const [time, setTime] = useState(meeting.time)
	const [locationId, setLocationId] = useState(meeting.locationId)
	const [message, setMessage] = useState('')

	async function submitMeeting(event) {
		event.preventDefault()

		const dateTime = new Date(`${date} ${time}`)

		try {
			const response = await fetch('http://localhost:3000/api/meeting', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					_id: meeting._id,
					date: dateTime,
					locationId,
					editMeeting
				})
			})
			const { success, message } = await response.json()

			setMessage(message)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={styles.meetingForm}>
			<form onSubmit={submitMeeting}>
				<label htmlFor='date'>Date</label>
				<input
					name='date'
					type='date'
					value={date}
					onChange={event => setDate(event.target.value)}
					rquired
				/>

				<label htmlFor='date'>Time</label>
				<input
					name='date'
					type='time'
					value={time}
					onChange={event => setTime(event.target.value)}
					rquired
				/>

				<label htmlFor='location'>Location</label>
				<select
					name='location'
					value={locationId}
					onChange={event => setLocationId(event.target.value)}	
				>
					{
						locations.map(location => <option key={location._id} value={location._id}>{location.name}</option>)
					}
				</select>

				<button type='submit'>Submit</button>
			</form>

			<p className={styles.meetingMessage}>{message}</p>
		</div>
	)
}

