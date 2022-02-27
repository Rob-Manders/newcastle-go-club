
import styles from './Button.module.scss'
import Link from 'next/link'

export default function Button({ href, children }) {
	return (
		<div className={styles.button}>
			<Link href={href}>{children}</Link>
		</div>
	)
}