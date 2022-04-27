import Head from 'next/head'
import styles from '@/styles/Demo.module.scss'
import DemoSchedule from '../demoComponents/DemoSchedule.js'


export default function Demo() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Review Scheduler</title>
        <meta name="description" content="An application that figures out when you should review topics you are learning and then organizes your items into a queue." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DEMO
        </h1>
        <h2 className={styles.subheading}>Data will disappear when the page refreshes. Log in to persist your data.</h2>

        <DemoSchedule />
      </main>
    </div>
  )
}