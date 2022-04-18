import styles from '@/styles/ReviewGrader.module.scss'
import { useScheduleContext } from '@/components/scheduleContext'
import { addReviewSession } from '@/utils/reviewItemUtils'

const gradeScale = [0, 1, 2, 3, 4, 5]

export function ReviewGrader({ topicId }) {

  const handleGradeClick = (e) => {
    const quality = parseInt(e.target.dataset.grade)
    const reviewItem = schedule.find(item => item.title === topicId)
    const updatedReviewItem = addReviewSession(reviewItem, quality)
    const updatedSchedule = schedule.map(item => item.title !== topicId ? item : updatedReviewItem)
  }
  return (
    <div className={styles.gradeContainer}>
      {
        gradeScale.map(g => (
          <button
            key={g}
            className={styles.gradeBtn}
            data-grade={g}
            onClick={handleGradeClick}
          >
            {g}
          </button>
        ))
      }
    </div>
  )
}