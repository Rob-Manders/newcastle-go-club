
import { useState } from 'react'
import styles from './Nav.module.scss'
import Link from 'next/link'

export default function Nav() {
	const [menuToggle, setMenuToggle] = useState(false)

	function toggleMenu() {
		setMenuToggle(prevState => {
			setMenuToggle(!prevState)
		})
	}

	function Links() {
		return (
			<>
				<Link className={styles.navLink} href="/">Home</Link>
				<Link className={styles.navLink} href="/meetings">Meetings</Link>
			</>
		)
	}

	return (
		<nav className={styles.nav}>
			<Link href="/">
				<img className={styles.logo} src="/NGC-Logo.svg" alt="logo"></img>
			</Link>

			<div className={styles.desktopLinks}>
				<Links />
			</div>

			<div className={styles.mobileMenuButton} onClick={toggleMenu}>
				{/* TODO: Hamburger icon. */}
			</div>

			{
				menuToggle
				&& 
				<div className={styles.mobileLinks}>
					<Links />
				</div>
			}
		</nav>
	)
}