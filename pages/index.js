import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Schedule from '@/components/Schedule.js'
import { getSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'

export default function Home({ session }) {
  const name = session?.user?.name?.split(' ')
  const firstName = name ? name[0] : null

  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Review Scheduler</title>
        <meta name="description" content="An application that figures out when you should review topics you are learning and then organizes your items into a queue." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>

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