import styles from '@/styles/Schedule.module.scss'
import TopicCard from './TopicCard'
import useReviewItems from 'hooks/useReviewItems'
import Modal from '@/components/Modal'
import AddReviewItem from './AddReviewItem'
import { useState, useRef, useEffect } from 'react'
import { getNextReviewDate } from '@/utils/reviewItemUtils'

export function CardTray() {
  const { isLoading, isError, data, error } = useReviewItems()
  const reviewItems = data

  const schedule = reviewItems?.sort((a, b) => {
    const nextReviewA = getNextReviewDate(a)
    const nextReviewB = getNextReviewDate(b)

    return nextReviewA - nextReviewB
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

export default function Schedule() {
  const [showModal, setShowModal] = useState(false)
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

  return (
    <>
      <div className={styles.scheduleCard}>
        <header className={styles.header}>
          <h2 className={styles.scheduleTitle}>Review Scheduler</h2>
          <button className={styles.addItemBtn} onClick={handleModalClick}>+</button>
        </header>
        <CardTray />
      </div>
      <Modal handleOverlayClick={handleOverlayClick} showModal={showModal}>
        <AddReviewItem ref={inputRef} />
      </Modal>
    </>


  )
} 