import { useState, useEffect } from 'react'
import { SessionGrader } from './SessionGrader'
import { getNextReviewDate } from '@/utils/reviewItemUtils'
import styles from '@/styles/TopicCard.module.scss'
import useDeleteReviewItem from 'hooks/useDeleteReviewItem'
import GradeVisualizer from './GradeVisualizer'

export default function TopicCard({ topic, index }) {
  const [showUpdater, setShowUpdater] = useState(false)
  const [delay, setDelay] = useState('0ms')
  const mutation = useDeleteReviewItem()

  useEffect(() => {
    setShowUpdater(false)
    setDelay('0ms')
  }, [topic])

  // Only add animation delay when entire schedule renders
  useEffect(() => {
    setDelay(index * 200 + 'ms')
  }, [])

  return (
    <div
      key={topic.title}
      className={styles.card}
      style={{ animationDelay: delay }}
    >
      <section className={styles.topSection}>
        <header className={styles.cardHeader}>
          <a className={styles.cardTitle}>
            {topic.title}
          </a>
        </header>
        <button
          className={showUpdater ? styles.gradeToggleOpen : styles.gradeToggleClosed}
          onClick={() => setShowUpdater(!showUpdater)}
        >
          update
        </button>
        {
          showUpdater &&
          <>
            <SessionGrader topic={topic} />
            <button
              onClick={() => mutation.mutate(topic)}
            >
              stop tracking
            </button>
          </>
        }
      </section>

      <hr className={styles.hr}></hr>

      <ul className={styles.info}>
        <li className={styles.next}>next: {getNextReviewDate(topic).toDateString()}</li>
        <li className={styles.infoItem}>last: {new Date(topic.lastReviewed).toDateString()}</li>
      </ul>
      <GradeVisualizer sessionGrades={topic.sessionGrades} />
    </div>
  )
}