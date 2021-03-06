
import bcrypt from 'bcryptjs'
import initCors from '../../../utils/initCors'
import generateKey from '../../../utils/generateKey'
import dbConnect from '../../../lib/dbConnect'
import User from '../../../models/User'
import { setCookies } from 'cookies-next'
import signToken from '../../../utils/signToken'

const cors = initCors(['POST'])

export default async function handler(req, res) {
	await cors(req, res)
	await dbConnect()

	if (req.method === 'POST') {
		try {
			const { email, password, passwordVerify } = req.body

			// Validate inputs.
			if (!email || !password || !passwordVerify) {
				return res.status(400).json({
					success: false,
					message: 'Missing required fields.'
				})
			}

			if (password.length < 6) {
				return res.status(400).json({
					success: false,
					message: 'Password must contain at least six characters.'
				})
			}

			if (password !== passwordVerify) {
				return res.status(400).json({
					success: false,
					message: 'Passwords do not match.'
				})
			}

			// Check if user already exists.
			const existingUser = await User.findOne({ email })
			if (existingUser) {
				return res.status(400).json({
					success: false,
					message: 'Account already exists with that email address.'
				})
			}

			// Hash password.
			const salt = await bcrypt.genSalt()
			const hashedPassword = await bcrypt.hash(password, salt)

			const verificationKey = await generateKey()

			const newUser = new User({
				email,
				hashedPassword,
				// verificationKey, TODO: Implement verification.
				accountType: 'user'
			})
			const savedUser = await newUser.save()

			const verificationToken = signToken({ id: savedUser._id, verificationKey })

			const cookieToken = signToken({ userId: savedUser._id })
			setCookies('token', cookieToken, {req, res})

			// TODO: Remove verification from HTTP response and add to email.
			return res.status(200).json({
				success: true,
				message: 'Successfully registered and logged in.',
				// verificationToken TODO: Implement verification.
			})

		} catch (error) {
			return res.status(500)
		}
	} else {
		return res.status(400).json({ error: 'Bad request.'})
	}
}