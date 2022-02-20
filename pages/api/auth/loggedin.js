
import jwt from 'jsonwebtoken'
import { getCookie } from 'cookies-next'
import initCors from '../../../utils/initCors'
import User from '../../../models/User'

const cors = initCors(['GET'])

export default async function handler(req, res) {
	await cors(req, res)

	if (req.method === 'GET') {
		try {
			const token = getCookie('token', {req, res})

			if (!token) return res.json({ loggedIn: false })

			const { userId } = jwt.verify(token, process.env.JWT_SECRET)

			const { accountType } = await User.findById(userId)

			return res.send({ loggedIn: true, accountType })
		} catch (error) {
			console.error(error)
			return res.send({ loggedIn: false })
		}
	} else {
		return res.status(400).json({ message: 'Bad request.' })
	}
}