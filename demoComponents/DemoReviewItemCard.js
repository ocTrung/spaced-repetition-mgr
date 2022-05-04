import { useState, useEffect } from 'react'
import { DemoSessionGrader } from './DemoSessionGrader'
import { getNextReviewDate } from '@/utils/reviewItemUtils'
import styles from '@/styles/ReviewItemCard.module.scss'
import GradeVisualizer from '@/components/GradeVisualizer'

export default function DemoReviewItemCard({ reviewItem, index, data, setData }) {
  const [showUpdater, setShowUpdater] = useState(false)
  const [delay, setDelay] = useState('0ms')

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

  const handleDelete = () => {
    const newData = data.filter(d => d.title !== reviewItem.title)
    setData(newData)
  }

  return (
    <div
      className={styles.card}
      style={{ animationDelay: delay }}
    >
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
              <DemoSessionGrader reviewItem={reviewItem} data={data} setData={setData} />
              <button
                className={styles.stopTrackingBtn}
                onClick={handleDelete}
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