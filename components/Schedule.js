import { useState } from 'react'
import styles from '@/styles/Schedule.module.css'

export function ReviewGradeInput({ topicId }) {
  return (
    <form className={styles.form} onClick={(e) => e.stopPropagation()}>
      <label htmlFor={topicId}>
        Review grade
      </label>
      <input 
        id={topicId} 
        className={styles.EFInput} 
        type='number' 
        min='1' 
        max='5'
      />
      <button className={styles.submitReview} type='submit'>
        reviewed
      </button>
    </form>
  )
}

export function TopicCard({topic}) {
  const [showSubmit, setShowSubmit] = useState(false)

  return (
    <div 
      key={topic.title} 
      className={styles.topicCard}
      onClick={() => setShowSubmit(!showSubmit)}
    >
      <section className={styles.topicMain}>
        <header className={styles.header}>
          <h3 className={styles.topicTitle}>
            {topic.title}
          </h3>
          <button className={styles.viewMoreBtn}>view topic</button>
        </header>
        {
          showSubmit &&
          <ReviewGradeInput topicId={topic.title} />
        }
      </section>

      <hr className={styles.hr}></hr>

      <ul className={styles.topicInfo}>
        <li className={styles.infoItem}>next: {topic.next().toDateString()}</li>
        <li className={styles.infoItem}>last score: {topic.EF}/5</li>
        <li className={styles.infoItem}>last reviewed: {topic.lastReviewed.toDateString()}</li>
      </ul>
    </div>
  )
}


export default function Schedule({schedule}) {

  return (
    <div className={styles.scheduleCard}>

      <h2 className={styles.scheduleTitle}>Scheduler Queue</h2>
      <div className={styles.cardTray}>
      {
        schedule.map(topic => (
          <TopicCard topic={topic}/>
        ))
      }
      </div>

    </div>
    
  )
} 