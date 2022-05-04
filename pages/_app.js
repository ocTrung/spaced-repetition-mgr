import '../styles/globals.scss'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SessionProvider } from "next-auth/react"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default MyApp
