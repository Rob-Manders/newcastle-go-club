
import styles from './Section.module.scss'

export default function Section({ children, label }) {
	return (
		<section className={styles.section} aria-label={label}>
			{children}
		</section>
	)
}