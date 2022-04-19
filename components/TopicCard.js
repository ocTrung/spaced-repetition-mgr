import { useState, useEffect } from 'react'
import { ReviewGrader } from './ReviewGrader'
import { getNextReviewDate } from '@/utils/reviewItemUtils'
import styles from '@/styles/TopicCard.module.scss'

export default function TopicCard({ topic, index }) {
  const [showGrader, setShowGrader] = useState(false)
  const [delay, setDelay] = useState('0ms')


  useEffect(() => {
    setShowGrader(false)
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
          className={showGrader ? styles.gradeToggleOpen : styles.gradeToggleClosed}
          onClick={() => setShowGrader(!showGrader)}
        >
          grade session
        </button>
        {
          showGrader &&
          <ReviewGrader topic={topic} />
        }
      </section>

      <hr className={styles.hr}></hr>

      <ul className={styles.info}>
        <li className={styles.infoItem}>next: {getNextReviewDate(topic).toDateString()}</li>
        <li className={styles.infoItem}>last grade: {topic.EF.toFixed(1)}/5</li>
        <li className={styles.infoItem}>last reviewed: {new Date(topic.lastReviewed).toDateString()}</li>
      </ul>
      <pre>
        {topic.intervals.toString()}
      </pre>
    </div>
  )
}