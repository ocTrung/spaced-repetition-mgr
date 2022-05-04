import styles from '@/styles/SessionGrader.module.scss'
import { addReviewSession } from '@/utils/reviewItemUtils'

const gradeScale = [0, 1, 2, 3, 4, 5]

const gradeToColor = [
  styles.zero,
  styles.one,
  styles.two,
  styles.three,
  styles.four,
  styles.five
]

export function DemoSessionGrader({ reviewItem, data, setData }) {
  const handleGradeClick = (e) => {
    const sessionGrade = parseInt(e.target.dataset.grade)
    const updatedReviewItem = addReviewSession(reviewItem, sessionGrade)

    const updatedData = data.map(d => d.title === updatedReviewItem.title ? updatedReviewItem : d)
    console.log('updatedData', updatedData)
    setData(updatedData)
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