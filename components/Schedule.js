import styles from '@/styles/Schedule.module.scss'
import TopicCard from './TopicCard'

export default function Schedule({schedule}) {
  const scheduleSortedByDate = schedule.sort((a,b) => a.lastReviewed - b.lastReviewed)

  return (
    <div className={styles.scheduleCard}>

      <h2 className={styles.scheduleTitle}>Scheduler Queue</h2>
      <div className={styles.cardTray}>
      {
        scheduleSortedByDate.map((topic, i) => (
          <TopicCard key={topic.title} topic={topic} index={i}/>
        ))
      }
      </div>

    </div>
    
  )
} 