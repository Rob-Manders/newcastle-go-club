
import initCors from '../../utils/initCors'
import dbConnect from '../../lib/dbConnect'
import Location from '../../models/Location'

const cors = initCors(['POST', 'DELETE'])

export default async function handler(req,res) {
	await cors(req, res)
	await dbConnect()

	if (req.method === 'POST') {
		try {
			const { name, area, postcode, gpsCoord } = req.body

			if (!name || !area || !postcode || !gpsCoord) {
				return res.status(400).json({
					success: false,
					message: 'Missing required fields.'
				})
			}

			const existingLocation = await Location.findOne({ name })
			if (existingLocation) {
				const updatedLocation = await Location.findByIdAndUpdate(existingLocation._id, req.body)

				return res.status(200).json({
					status: 'Success',
					message: `${updatedLocation.name} succesfully updated.`,
					updatedLocation
				})
			}

			const newLocation = new Location(req.body)
			const savedLocation = await newLocation.save()

			return res.status(200).json({
				status: 'Success',
				message: `${savedLocation.name} created successfully.`,
				savedLocation
			})

		} catch (error) {
			return res.status(500)
		}
	}

	if (req.method === 'DELETE') {
		try {
			
		} catch (error) {
			
		}
	}
}