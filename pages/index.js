import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Schedule from '@/components/Schedule.jsx'
import AddReviewItem from 'components/addreviewitem'
import { useState } from 'react'
import { PrismaClient } from '@prisma/client'
import { serialize, deserialize } from 'superjson'
import { useScheduleContext } from '@/components/ScheduleContext'

export default function Home({ serializedItemsList }) {
  //TODO: custom hook for modal
  const [showModal, setShowModal] = useState(false)

  const handleOverlayClick = () => {
    setShowModal(false)
  }

  const itemsList = deserialize(serializedItemsList)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, Broh
        </h1>

        {
          <Schedule itemsList={itemsList} showModal={showModal} setShowModal={setShowModal} />
        }
      </main>
      <div
        className={showModal ? styles.showOverlay : styles.hideOverlay}
        onClick={handleOverlayClick}
      >
      </div>
      <div className={showModal ? styles.showModal : styles.hideModal}>
        <AddReviewItem />
      </div>
    </div>
  )
}

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const data = await prisma.reviewItem.findMany()
  const serializedItemsList = serialize(data);
  return {
    props: {
      serializedItemsList
    }
  }
}
