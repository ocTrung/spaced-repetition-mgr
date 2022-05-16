import Head from 'next/head'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.scss'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Review Scheduler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="An application that figures out when you should review topics you are learning and then organizes your items into a queue." />
        <link rel="icon" href="/clock.svg" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
