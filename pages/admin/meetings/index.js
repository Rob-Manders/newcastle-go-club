
import { useContext } from 'react'
import Link from 'next/link'
import styles from '../../../styles/admin/meetings/Meetings.module.scss'
import { AuthContext } from '../../../context/AuthContext'
import DocumentHead from '../../../components/DocumentHead/DocumentHead'
import DefaultLayout from '../../../layouts/DefaultLayout'

export default function Meetings() {
	const { loggedIn, accountType } = useContext(AuthContext)

	function MeetingsPage() {
		return (
			<div className={styles.meetings}>
				<Link href='/admin'>Admin</Link>
				Meetings
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<DocumentHead pageTitle='Admin - Meetings' noIndex />
			<DefaultLayout>
				{loggedIn && accountType === 'admin' && <MeetingsPage />}
			</DefaultLayout>
		</div>
	)
}