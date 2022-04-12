import { useState, useEffect } from 'react'
import { ReviewGrader } from './ReviewGrader'
import { getNextReviewDate } from '@/utils/reviewItemUtils'
import styles from '@/styles/TopicCard.module.scss'

export default function TopicCard({topic, index}) {
  const [showGrader, setShowGrader] = useState(false)
  const delay = index * 200 + 'ms'

  useEffect(() => {
    setShowGrader(false)
  }, [topic])

  return (
    <div 
      key={topic.title} 
      className={styles.card}
      style={{animationDelay: delay}}
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
          <ReviewGrader topicId={topic.title} />
        }
      </section>

      <hr className={styles.hr}></hr>

      <ul className={styles.info}>
        <li className={styles.infoItem}>next: {getNextReviewDate(topic).toDateString()}</li>
        <li className={styles.infoItem}>last grade: {topic.EF}/5</li>
        <li className={styles.infoItem}>last reviewed: {topic.lastReviewed.toDateString()}</li>
      </ul>
    </div>
  )
}