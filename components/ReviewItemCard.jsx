import { useState, useEffect } from 'react'
import { SessionGrader } from '@/components/SessionGrader'
import GradeVisualizer from '@/components/GradeVisualizer'
import useDeleteReviewItem from 'hooks/useDeleteReviewItem'
import { getNextReviewDate } from '@/utils/reviewItemUtils'
import styles from '@/styles/ReviewItemCard.module.scss'

export default function ReviewItemCard({ reviewItem, index }) {
  const [showUpdater, setShowUpdater] = useState(false)
  const [delay, setDelay] = useState('0ms')
  const mutation = useDeleteReviewItem()

  useEffect(() => {
    setShowUpdater(false)
    setDelay('0ms')
  }, [reviewItem])

  // Only add animation delay when entire list renders
  useEffect(() => {
    setDelay(index * 200 + 'ms')
  }, [])

  const nextDate = getNextReviewDate(reviewItem)
  const day = nextDate.getDate()
  const month = nextDate.toLocaleString('default', { month: 'long' })

  return (
    <div className={styles.card} style={{ animationDelay: delay }}>
      <div className={styles.cardLeft}>
        <div className={styles.date}>
          <p className={styles.dateTitle}>due</p>
          <p className={styles.day}>{day}</p>
          <p className={styles.month}>{month}</p>
        </div>
      </div>
      <div
        key={reviewItem.title}
        className={styles.main}
      >
        <section className={styles.topSection}>
          <header className={styles.cardHeader}>
            <a className={styles.cardTitle}>
              {reviewItem.title}
            </a>
          </header>
          <button
            className={showUpdater ? styles.gradeToggleOpen : styles.gradeToggleClosed}
            onClick={() => setShowUpdater(!showUpdater)}
          >
            {showUpdater ? 'close' : 'update'}
          </button>
          {
            showUpdater &&
            <>
              <SessionGrader reviewItem={reviewItem} />
              <button
                className={styles.stopTrackingBtn}
                onClick={() => mutation.mutate(reviewItem)}
              >
                stop tracking
              </button>
            </>
          }
        </section>

        <hr className={styles.hr}></hr>

        <ul className={styles.info}>
          <li className={styles.infoItem}>current interval: {reviewItem.intervals[reviewItem.intervals.length - 1] || 0}</li>
          <li className={styles.infoItem}>started: {new Date(reviewItem.startDate).toDateString()}</li>
        </ul>
        <GradeVisualizer sessionGrades={reviewItem.sessionGrades} />
      </div>
    </div>
  )
}