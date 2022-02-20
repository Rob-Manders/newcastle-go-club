
import { useContext, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/admin/Admin.module.scss'
import { AuthContext } from '../../context/AuthContext'
import DocumentHead from '../../components/DocumentHead/DocumentHead'
import LoginForm from '../../components/LoginForm/LoginForm'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function Admin() {
	const router = useRouter()
	const { loggedIn, accountType } = useContext(AuthContext)

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin' />
			<DefaultLayout>
				{!loggedIn && <LoginForm />}
				{loggedIn && accountType === 'admin' && <p>Admin page.</p>}
			</DefaultLayout>
		</div>
	)
}