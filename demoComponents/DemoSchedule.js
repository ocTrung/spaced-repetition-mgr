import styles from '@/styles/Schedule.module.scss'
import DemoTopicCard from './DemoTopicCard'
import Modal from '@/components/Modal'
import DemoAddReviewItem from './DemoAddReviewItem'
import { useState, useRef, useEffect } from 'react'
import { getNextReviewDate, ReviewItem, addReviewSession } from '@/utils/reviewItemUtils'

export function DemoCardTray({ data, setData }) {
  const reviewItems = data

  const schedule = reviewItems?.sort((a, b) => {
    const nextReviewA = getNextReviewDate(a)
    const nextReviewB = getNextReviewDate(b)

    return nextReviewA - nextReviewB
  })

  return (
    <div className={styles.cardTray}>
      {
        schedule.map((topic, i) => (
          <DemoTopicCard key={topic.title} topic={topic} index={i} data={data} setData={setData} />
        ))
      }
    </div>
  )
}

let reviewItemDemo = new ReviewItem('HTML Fundamentals', new Date())
reviewItemDemo = addReviewSession(reviewItemDemo, 2)
reviewItemDemo = addReviewSession(reviewItemDemo, 4)
reviewItemDemo = addReviewSession(reviewItemDemo, 1)

const initialDemoData = [
  reviewItemDemo,
]

export default function DemoSchedule() {
  const [data, setData] = useState(initialDemoData)
  const [showModal, setShowModal] = useState()
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [showModal])

  const handleOverlayClick = () => {
    setShowModal(false)
  }

  const handleModalClick = () => {
    setShowModal(!showModal)
    console.log(inputRef.current)
  }

  console.log(data)

  return (
    <>
      <div className={styles.scheduleCard}>
        <header className={styles.header}>
          <h2 className={styles.scheduleTitle}>Review Scheduler</h2>
          <button className={styles.addItemBtn} onClick={handleModalClick}>+</button>
        </header>
        <DemoCardTray data={data} setData={setData} />
      </div>
      <Modal handleOverlayClick={handleOverlayClick} showModal={showModal}>
        <DemoAddReviewItem ref={inputRef} data={data} setData={setData} />
      </Modal>
    </>


  )
} 