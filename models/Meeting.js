
import mongoose from 'mongoose'

const MeetingSchema = new mongoose.Schema({
	date: {
		type: Date,
		required: true
	},
	locationId: {
		required: true
	}
})

export default mongoose.models.Meeting || mongoose.model('Meeting', MeetingSchema)