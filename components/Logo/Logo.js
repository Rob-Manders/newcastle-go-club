
import Link from 'next/link'
import styles from './Logo.module.scss'

export default function Logo() {
	return (
		<Link href='/'>
			<div className={styles.logo}>
				<p>Newcastle</p>
				<h1>Go Club</h1>
			</div>
		</Link>
	)
}