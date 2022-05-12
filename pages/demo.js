import styles from '@/styles/Demo.module.scss'
import DemoSchedule from '../demoComponents/DemoSchedule.jsx'
import { getProviders, signIn } from "next-auth/react"
import Header from '@/components/Header.jsx'

export default function Demo({ providers }) {

  return (
    <div className={styles.container}>
      <Header providers={providers} />

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

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}