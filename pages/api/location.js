
import initCors from '../../utils/initCors'
import dbConnect from '../../lib/dbConnect'
import LocationModel from '../../models/LocationModel'

const cors = initCors(['POST', 'DELETE'])

export default async function handler(req,res) {
	await cors(req, res)
	await dbConnect()

	if (req.method === 'POST') {
		try {
			const { _id, name, area, postcode, gpsCoord, edit } = req.body

			if (!name || !area || !postcode || !gpsCoord) {
				return res.status(400).json({
					success: false,
					message: 'Missing required fields.'
				})
			}

			if (edit === true) {
				const existingLocation = await LocationModel.findOne({ _id: _id })
				if (existingLocation) {
					const updatedLocation = await LocationModel.findByIdAndUpdate(existingLocation._id, {
						name,
						area,
						postcode,
						gpsCoord
					})
	
					return res.status(200).json({
						success: true,
						message: `${updatedLocation.name} succesfully updated.`,
						updatedLocation
					})
				}
			}

			const newLocation = new LocationModel({
				name,
				area,
				postcode,
				gpsCoord
			})
			const savedLocation = await newLocation.save()

			return res.status(200).json({
				success: true,
				message: `${savedLocation.name} created successfully.`,
				savedLocation
			})

		} catch (error) {
			return res.status(500).json(error)
		}
	}

	if (req.method === 'DELETE') {
		try {
			const { locationId } = req.body

			if (!locationId) {
				return res.status(400).json({
					success: false,
					message: 'Missing location ID.'
				})
			}

			const deletedLocation = await LocationModel.deleteOne({ _id: locationId })

			if (deletedLocation) {
				return res.status(200).json({
					success: true,
					message: 'Location deleted.'
				})
			} else {
				return res.status(500).json({
					success: false,
					message: 'UNable to delete location.'
				})
			}
		} catch (error) {
			return res.status(500).json(error)
		}
	}
}