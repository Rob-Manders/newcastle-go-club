
import mongoose from 'mongoose'

const MeetingSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	locationId: {
		type: String,
		required: true
	}
})

export default mongoose.models.MeetingModel || mongoose.model('MeetingModel', MeetingSchema)