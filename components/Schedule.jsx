import styles from '@/styles/Schedule.module.scss'
import TopicCard from './TopicCard'

export default function Schedule({ itemsList, showModal, setShowModal }) {
  const schedule = itemsList.sort((a, b) => a.lastReviewed - b.lastReviewed)
  const handleModalClick = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={styles.scheduleCard}>
      <header className={styles.header}>
        <h2 className={styles.scheduleTitle}>Scheduler Queue</h2>
        <button className={styles.addItemBtn} onClick={handleModalClick}>+</button>
      </header>
      <div className={styles.cardTray}>
        {
          schedule.map((topic, i) => (
            <TopicCard key={topic.id} topic={topic} index={i} />
          ))
        }
      </div>

    </div>

  )
} 