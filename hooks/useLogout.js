
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function useLogout() {
	const { loggedIn, authCheck } = useContext(AuthContext)

	async function logout() {
		if (!loggedIn) return

		try {
			const response = await fetch('${process.env.NEXT_PUBLIC_API_URL}/auth/logout', {
				method: 'GET',
			})
			const { success } = await response.json()

			if (success === true) authCheck()

		} catch (error) {
			console.log('Unable to fetch response from server.')
		}
	}

	return logout
}