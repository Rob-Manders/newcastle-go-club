
import { useState, forwardRef } from 'react'
import styles from './Nav.module.scss'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import MenuIcon from '../../icons/MenuIcon'
import CloseIcon from '../../icons/CloseIcon'

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
				<Link href='/'>Home</Link>
				<Link href='/what-is-go'>What is Go?</Link>
				<Link href='/meetings'>Meetings</Link>
				<Link href='/about-us'>About Us</Link>
				<Link href='/contact'>Contact</Link>
			</>
		)
	}

	return (
		<nav className={styles.nav}>
			<Logo />
			
			<div className={styles.desktopLinks}>
				<Links />
			</div>

			<div className={styles.mobileMenuButton} onClick={toggleMenu}>
				{
					!menuToggle
					?
					<MenuIcon className={styles.menuIcon} />
					:
					<CloseIcon className={styles.menuIconActive} />
				}
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