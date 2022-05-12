import styles from '@/styles/Schedule.module.scss'
import DemoReviewItemCard from './DemoReviewItemCard'
import Modal from '@/components/Modal'
import ItemPlaceholder from '@/components/ItemPlaceholder'
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
        schedule.map((reviewItem, i) => (
          <DemoReviewItemCard key={reviewItem.title} reviewItem={reviewItem} index={i} data={data} setData={setData} />
        ))
      }
    </div>
  )
}

let demoReviewItem1 = new ReviewItem('CSS Fundamentals', new Date())
demoReviewItem1 = addReviewSession(demoReviewItem1, 2)
demoReviewItem1 = addReviewSession(demoReviewItem1, 3)
demoReviewItem1 = addReviewSession(demoReviewItem1, 4)
let demoReviewItem2 = new ReviewItem('Notes on treble clef', new Date())

const initialDemoData = [
  demoReviewItem1,
  demoReviewItem2
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
  }

  return (
    <>
      <div className={styles.scheduleCard}>
        <header className={styles.header}>
          <h2 className={styles.scheduleTitle}>Review Scheduler</h2>
          <button className={styles.addItemBtn} onClick={handleModalClick}>
            <img src='/plus.svg' height='10' width='10'></img>
          </button>
        </header>
        <DemoCardTray data={data} setData={setData} />
        <ItemPlaceholder data={data} />
      </div>
      <Modal handleOverlayClick={handleOverlayClick} showModal={showModal}>
        <DemoAddReviewItem ref={inputRef} data={data} setData={setData} setShowModal={setShowModal} />
      </Modal>
    </>


  )
} 