
import mongoose from 'mongoose'

const MeetingSchema = new mongoose.Schema({
	date: {
		type: Date,
		required: true
	},
	locationId: {
		required: true
	},
	notes: {
		types: String,
		required: false
	}
})

export default mongoose.models.Meeting || mongoose.model('Meeting', MeetingSchema)