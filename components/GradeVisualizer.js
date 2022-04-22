import styles from '@/styles/GradeVisualizer.module.scss'

const gradeToColor = [
  styles.zero,
  styles.one,
  styles.two,
  styles.three,
  styles.four,
  styles.five
]

export function VisualizerBlock({ sessionGrade, index }) {
  const baseStyle = styles.block
  const color = gradeToColor[sessionGrade]
  const style = baseStyle + ' ' + color

  return (
    <div className={style}>
    </div>
  )
}

export default function GradeVisualizer({ sessionGrades }) {
  return (
    <div className={styles.container}>
      {
        sessionGrades.map((grade, i) => (
          <VisualizerBlock key={i} sessionGrade={grade} index={i} />
        ))
      }
    </div>
  )
}