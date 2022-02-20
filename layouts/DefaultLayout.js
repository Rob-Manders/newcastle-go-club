
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

export default function DefaultLayout({ children }) {
	return (
		<>
			<Nav />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}