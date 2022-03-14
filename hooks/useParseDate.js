
export default function useParseDate() {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]

	function appendOrdinal(dateObject) {
		// I pinched this from https://www.w3resource.com/javascript-exercises/javascript-date-exercise-23.php
		return dateObject.getDate()+(
			dateObject.getDate() % 10 == 1 && dateObject.getDate() != 11 ? 'st' : (
				dateObject.getDate() % 10 == 2 && dateObject.getDate() != 12 ? 'nd' : (
					dateObject.getDate() % 10 == 3 && dateObject.getDate() != 13 ? 'rd' : 'th'
				)
			)
		)
	}

	function parseDate(date) {
		const dateObject = new Date(date)

		const dayName = days[dateObject.getDay()]
		const day = appendOrdinal(dateObject)
		const month = months[dateObject.getMonth()]

		return `${dayName} ${day} ${month}`
	}

	return parseDate
}