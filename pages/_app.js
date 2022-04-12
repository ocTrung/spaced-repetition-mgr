import '../styles/globals.scss'
import { ScheduleProvider } from '@/components/scheduleContext'

function MyApp({ Component, pageProps }) {
  return (
    <ScheduleProvider>
      <Component {...pageProps} />
    </ScheduleProvider>
  )
}

export default MyApp
