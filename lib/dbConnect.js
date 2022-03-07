
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
	throw new Error('Please define a MONGODB_URI environment variable inside .env.local')
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
