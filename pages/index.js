import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Schedule from '@/components/Schedule.jsx'
import { getSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'

export default function Home({ session }) {
  console.log('page', session?.user)
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, Broh
        </h1>

        <Schedule />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  console.log('session', session)

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