
import { useContext } from 'react'
import styles from '../../styles/admin/Admin.module.scss'
import Link from 'next/link'
import useLogout from '../../hooks/useLogout'
import { AuthContext } from '../../context/AuthContext'
import DocumentHead from '../../components/DocumentHead/DocumentHead'
import LoginForm from '../../components/LoginForm/LoginForm'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function Admin() {
	const { loggedIn, accountType } = useContext(AuthContext)
	const logout = useLogout()

	function AdminMenu() {
		return (
			<div className={styles.adminMenu}>
				<h2>Admin Menu</h2>
				<Link href='/admin/meetings'>Meetings</Link>
				<Link href='/admin/locations'>Locations</Link>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin' noIndex />
			<DefaultLayout>
				<div className={styles.adminContainer}>
					{!loggedIn && <LoginForm />}
					{loggedIn && accountType === 'admin' && <AdminMenu />}
					{loggedIn && <p className = {styles.logoutLink} onClick={logout}>Logout</p>}
				</div>
			</DefaultLayout>
		</div>
	)
}