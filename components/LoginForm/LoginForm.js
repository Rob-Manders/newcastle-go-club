
import { useState, useContext } from 'react'
import styles from './LoginForm.module.scss'
import { AuthContext } from '../../context/AuthContext'

export default function LoginForm() {
	const { authCheck } = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')

	async function login(event) {
		event.preventDefault()

		try {
			const response = await fetch('${process.env.NEXT_PUBLIC_API_URL}/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
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
				<label htmlFor='email'>Email Address</label>
				<input
					name='email'
					type='email'
					value={email}
					onChange={event => setEmail(event.target.value)}
					required
				/>

				<label htmlFor='password'>Password</label>
				<input
					name='password'
					type='password'
					value={password}
					onChange={event => setPassword(event.target.value)}
					required
				/>

				<button type='submit'>Login</button>
			</form>

			<p className={styles.loginMessage}>{message}</p>
		</div>
	)
}