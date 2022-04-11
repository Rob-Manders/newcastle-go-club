
import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
	const [ loggedIn, setLoggedIn ] = useState(undefined)
	const [ accountType, setAccountType ] = useState('none')

	async function authCheck() {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/loggedin`, {
			method: 'GET',
			credentials: 'same-origin'
		})
		const { loggedIn, accountType } = await response.json()
		setLoggedIn(loggedIn)

		if (loggedIn) {
			setAccountType(accountType)
		} else {
			setAccountType('none')
		}
	}

	useEffect(() => {
		authCheck()
	}, [])

	return (
		<AuthContext.Provider value={{ loggedIn, authCheck, accountType }}>
			{children}
		</AuthContext.Provider>
	)
}