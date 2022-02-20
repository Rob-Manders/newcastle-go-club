
import styles from './Map.module.scss'

export default function Map({ elementId, mapsApiKey, gpsCoord }) {
	return (
		<iframe
			className={styles.map}
			loading='lazy'
			src={`
				https://www.google.com/maps/embed/v1/place
				?key=${mapsApiKey}
				&zoom=15
				&q=${gpsCoord}
			`} />
	)
}