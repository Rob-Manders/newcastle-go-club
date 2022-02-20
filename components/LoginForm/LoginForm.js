
import { useState, useContext } from 'react'
import styles from './LoginForm.module.scss'
import { AuthContext } from '../../context/AuthContext'

export default function LoginForm() {
	const { authCheck } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('Login message test.')

	async function login(event) {
		event.preventDefault()

		try {
			const response = await fetch('http://localhost:3000/api/auth/login', {
				method: 'POST',
				headers: {
					'COntent-Type': 'application/json'
				},
				body: JSON.stringify({
					email,
					password
				})
			})
			const { success, message } = await response.json()

			if (success === true) {
				authCheck()
			} else {
				setMessage(message)
			}
		} catch (error) {
			setMessage('Unable to fetch response from server.')
		}
	}

	return (
		<div className={styles.loginForm}>
			<form onSubmit={login}>
				<label for='email'>Email Address</label>
				<input
					name='email'
					type='email'
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>

				<label for='password'>Password</label>
				<input
					name='password'
					type='password'
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>

				<button type='submit'>Login</button>
			</form>

			<p className={styles.loginMessage}>{message}</p>
		</div>
	)
}