
import mongoose from 'mongoose'

const MOBGOSB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
	throw new Error('PLease define a MONGODB_URI envrionment variable inside .env.local')
}

let cached = global.mongoose

if (!cached) {
	cached = global.mongoose = {
		connection: null,
		promise: null
	}
}

export default async function dbConnect() {
	if (cached.connection) {
		return cached.connection
	}

	if (!cached.connection) {
		const options = {	bufferCommands: false }

		cached.promise = mongoose
			.connect(MONGODB_URI, options)
			.then(mongoose => mongoose)
	}

	cached.connection = await cached.promise
	return cached.connection
}
