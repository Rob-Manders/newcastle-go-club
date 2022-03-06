
import { useState } from 'react'
import styles from './LocationForm.module.scss'

const defaultLocation = {
	_id: null,
	name: '',
	area: '',
	postcode: '',
	gpsCoord: ''
}

export default function LocationForm({ editLocation = false, location = defaultLocation }) {
	const [name, setName] = useState(location.name)
	const [area, setArea] = useState(location.area)
	const [postcode, setPostcode] = useState(location.postcode)
	const [gpsCoord, setGpsCoord] = useState(location.gpsCoord)
	const [message, setMessage] = useState('')

	async function submitLocation(event) {
		event.preventDefault()

		try {
			const response = await fetch('http://localhost:3000/api/location', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					_id: location._id,
					name,
					area,
					postcode,
					gpsCoord,
					edit: editLocation
				})
			})
			const { success, message } = await response.json()

			if (success === true) {
				setMessage(message)
			} else {
				setMessage(message)
			}
		} catch (error) {
			console.log('Unable to fetch response from server.')
		}
	}

	return (
		<div className={styles.locationForm}>
			<form onSubmit={submitLocation}>
				<label htmlFor='name'>Location Name</label>
				<input
					name='name'
					type='text'
					value={name}
					onChange={event => setName(event.target.value)}
					required
				/>

				<label htmlFor='area'>Area</label>
				<input
					name='area'
					type='text'
					value={area}
					onChange={event => setArea(event.target.value)}
					required
				/>

				<label htmlFor='postcode'>Postcode</label>
				<input
					name='postcode'
					type='text'
					value={postcode}
					onChange={event => setPostcode(event.target.value)}
					required
				/>

				<label htmlFor='gpsCoord'>GPS Coordinates</label>
				<input
					name='gpsCoord'
					type='text'
					value={gpsCoord}
					onChange={event => setGpsCoord(event.target.value)}
				/>

				<button type='submit'>Submit</button>
			</form>

			<p className={styles.locationMessage}>{message}</p>
		</div>
	)
}