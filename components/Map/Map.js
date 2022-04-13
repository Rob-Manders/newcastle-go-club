
import styles from './Map.module.scss'

export default function Map({ elementId, gpsCoord }) {
	return (
		<iframe
			className={styles.map}
			loading='lazy'
			src={`
				https://www.google.com/maps/embed/v1/place
				?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
				&zoom=13
				&q=${gpsCoord}
			`}
		/>
	)
}