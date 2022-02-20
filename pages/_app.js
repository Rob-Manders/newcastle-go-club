
import '../styles/globals.scss'
import AuthContextProvider from '../context/AuthContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
