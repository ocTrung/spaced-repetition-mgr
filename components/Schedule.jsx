import styles from '@/styles/Schedule.module.scss'
import TopicCard from './TopicCard'
import useReviewItems from 'hooks/useReviewItems'

export function CardTray() {
  const { isLoading, isError, data, error } = useReviewItems()
  const reviewItems = data

  const schedule = reviewItems?.sort((a, b) => {
    const lastReviewedDateA = new Date(a.lastReviewed)
    const lastReviewedDateB = new Date(b.lastReviewed)

    console.log(lastReviewedDateA - lastReviewedDateB)

    return lastReviewedDateA - lastReviewedDateB
  })

  if (isLoading)
    return 'Loading...'

  if (isError)
    return <span>Error: {error.message}</span>

  return (
    <div className={styles.cardTray}>
      {
        schedule.map((topic, i) => (
          <TopicCard key={topic.id} topic={topic} index={i} />
        ))
      }
    </div>
  )
}

export default function Schedule({ showModal, setShowModal }) {
  const handleModalClick = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={styles.scheduleCard}>
      <header className={styles.header}>
        <h2 className={styles.scheduleTitle}>Scheduler Queue</h2>
        <button className={styles.addItemBtn} onClick={handleModalClick}>+</button>
      </header>
      <CardTray />
    </div>

  )
} 