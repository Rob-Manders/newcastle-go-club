
import mongoose from 'mongoose'

const MeetingSchema = new mongoose.Schema({
	date: {
		type: Date,
		required: true
	},
	locationId: {
		type: String,
		required: true
	}
})

export default mongoose.models.MeetingModel || mongoose.model('MeetingModel', MeetingSchema)