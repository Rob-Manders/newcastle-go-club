
import mongoose from 'mongoose'

const LocationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	area: {
		type: String,
		required: true
	},
	postcode: {
		type: String,
		required: true
	},
	gpsCoord: {
		type: String,
		required: true
	}
})

export default mongoose.models.Location || mongoose.model('Location', LocationSchema)