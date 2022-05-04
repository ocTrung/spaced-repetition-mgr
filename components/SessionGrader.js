import styles from '@/styles/SessionGrader.module.scss'
import { addReviewSession } from '@/utils/reviewItemUtils'
import useUpdateReviewItems from 'hooks/useUpdateReviewItems'

const gradeScale = [0, 1, 2, 3, 4, 5]

const gradeToColor = [
  styles.zero,
  styles.one,
  styles.two,
  styles.three,
  styles.four,
  styles.five
]

export function SessionGrader({ reviewItem }) {
  const mutation = useUpdateReviewItems()

  const handleGradeClick = (e) => {
    const sessionGrade = parseInt(e.target.dataset.grade)
    const updatedReviewItem = addReviewSession(reviewItem, sessionGrade)
    mutation.mutate(updatedReviewItem)
  }

  return (
    <div className={styles.gradeContainer}>
      <h2 className={styles.heading}>Grade</h2>
      {
        gradeScale.map(g => (
          <button
            key={g}
            className={styles.gradeBtn + ' ' + gradeToColor[g]}
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