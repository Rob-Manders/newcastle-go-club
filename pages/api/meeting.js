
import initCors from '../../utils/initCors'
import dbConnect from '../../lib/dbConnect'
import MeetingModel from '../../models/MeetingModel'

const cors = initCors(['POST', 'DELETE'])

export default async function handler(req, res) {
	await cors(req, res)
	await dbConnect()

	if (req.method === 'POST') {
		try {
			const { _id, date, time, locationId, editMeeting } = req.body

			if (!date || !time || !locationId) {
				return res.status(400).json({
					success: false,
					message: 'Missing required fields.'
				})
			}

			const expiryDate = new Date(`${date} ${time}`)

			if (editMeeting === true) {
				const existingMeeting = await MeetingModel.findOne({ _id: _id })
				if (existingMeeting) {
					const updatedMeeting = await MeetingModel.findByIdAndUpdate(existingMeeting._id, {
						date,
						time,
						locationId,
						expireAt: expiryDate
					})

					return res.status(200).json({
						success: true,
						message: 'Meeting succeffully updated.',
						updatedMeeting
					})
				}
			}

			const newMeeting = new MeetingModel({
				date,
				time,
				locationId,
				expireAt: expiryDate
			})
			const savedMeeting = await newMeeting.save()

			return res.status(200).json({
				success: true,
				message: 'New meeting saved successfully',
			})
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	if (req.method === 'DELETE') {
		try {
			const { meetingId } = req.body

			if (!meetingId) {
				return res.status(400).json({
					success: false,
					message: 'Missing meeting ID.'
				})
			}

			const deletedMeeting = await MeetingModel.deleteOne({ _id: meetingId })

			if (deletedMeeting) {
				return res.status(200).json({
					success: true,
					message: 'Meeting deleted.'
				})
			} else {
				return res.status(500).json({
					success: false,
					message: 'Unable to delete meeting.'
				})
			}
		} catch (error) {
			return res.status(500).json(error)
		}
	}
}