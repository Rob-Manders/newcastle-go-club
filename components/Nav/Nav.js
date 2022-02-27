
import { useState, forwardRef } from 'react'
import styles from './Nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../Logo/Logo'

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
					<Image className={styles.menuIcon} src='/icons/menu-icon.svg' layout='fill'/>
					:
					<Image className={styles.menuIconActive}src='/icons/close-icon.svg' layout='fill'/>
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