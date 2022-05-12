import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Schedule from '@/components/Schedule.jsx'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.scss'

export default function Home({ session }) {
  return (
    <div className={styles.container}>
      <Navbar />
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