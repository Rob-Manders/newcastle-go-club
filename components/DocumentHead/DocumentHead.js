
import Head from 'next/head'

export default function DocumentHead({ pageTitle, noIndex = false }) {
	return (
		<Head>
			<title>
				{`Newcastle Go Club - ${pageTitle}`}
			</title>
			<meta name="description" content="A group of like-minded, supportive Go players of all skill levels based in Newcastle upon Tyne." />
			<link rel="icon" href="/favicon.ico" />
			{noIndex && <meta name="robots" content="noindex" />}
		</Head>
	)
}