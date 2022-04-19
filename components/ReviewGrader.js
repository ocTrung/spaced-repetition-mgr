import styles from '@/styles/ReviewGrader.module.scss'
import { addReviewSession } from '@/utils/reviewItemUtils'
import useUpdateReviewItems from 'hooks/useUpdateReviewItems'

const gradeScale = [0, 1, 2, 3, 4, 5]

export function ReviewGrader({ topic }) {
  const mutation = useUpdateReviewItems()

  const handleGradeClick = (e) => {
    const quality = parseInt(e.target.dataset.grade)
    const reviewItem = topic
    const updatedReviewItem = addReviewSession(reviewItem, quality)
    mutation.mutate(updatedReviewItem)
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