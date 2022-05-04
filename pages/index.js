import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Schedule from '@/components/Schedule.js'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.scss'

export default function Home({ session }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Review Scheduler</title>
        <meta name="description" content="An application that figures out when you should review topics you are learning and then organizes your items into a queue." />
        <link rel="icon" href="/clock.svg" />
      </Head>

      <main className={styles.main}>
        <Schedule />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }

  return {
    props: { session }
  }
}